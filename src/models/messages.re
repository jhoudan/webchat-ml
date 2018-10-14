type t = {
  id: string,
  attachment: Attachment.t,
  fromBot: bool,
};

module Decode = {
  type result = {
    messages: array(t),
    waitTime: int,
  };

  let message = json =>
    Json.Decode.{
      id: json |> field("id", string),
      attachment:
        json |> field("attachment", Attachment.Decode.attachmentVariant),
      fromBot: json |> at(["participant", "isBot"], bool),
    };

  let result = json =>
    Json.Decode.{
      waitTime: json |> at(["results", "waitTime"], int),
      messages:
        json |> at(["results", "messages"], Json.Decode.array(message)),
    };
};

module Api = {
  let poll =
      (
        {channelid, token}: Types.credentials,
        conversationId: string,
        lastMessageId: option(string),
      )
      : Js.Promise.t(option((int, array(t)))) => {
    let id = lastMessageId |> Js.Option.getWithDefault("");
    let query = {j|last_message_id=$id|j};

    Js.Promise.(
      Fetch.fetchWithInit(
        {j|https://api.recast.ai/connect/v1/webhook/$channelid/conversations/$conversationId/poll?$query|j},
        Fetch.RequestInit.make(
          ~headers=Fetch.HeadersInit.make({"Authorization": token}),
          (),
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(json => json |> Decode.result |> resolve)
      |> then_(({waitTime, messages}: Decode.result) =>
           resolve(Some((waitTime, messages)))
         )
      |> catch(_err => resolve(None))
    );
  };

  let send =
      ({channelid, token}: Types.credentials, chatId: string, attachment) => {
    let payload =
      {
        "chatId": chatId,
        "message": {
          "attachment": attachment,
        },
      }
      ->Js.Json.stringifyAny
      |> Js.Option.getWithDefault("");

    let url = {j|https://api.recast.ai/connect/v1/webhook/$channelid|j};
    Js.Promise.(
      Fetch.fetchWithInit(
        url,
        Fetch.RequestInit.make(
          ~method_=Post,
          ~headers=
            Fetch.HeadersInit.make({
              "Authorization": token,
              "Content-Type": "application/json",
            }),
          ~body=Fetch.BodyInit.make(payload),
          (),
        ),
      )
      |> then_(Fetch.Response.json)
    )
    |> ignore;
  };
};
