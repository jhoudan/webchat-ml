type textMessage = {
  type_: string,
  content: string,
};

type t =
  | Text(textMessage);

module Decode = {
  let textMessage = json =>
    Json.Decode.{
      type_: json |> field("type", string),
      content: json |> field("content", string),
    };

  let attachmentVariant =
    Json.Decode.(oneOf([textMessage |> map(m => Text(m))]));
};
