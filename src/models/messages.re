/* TODO */
type t = {lol: int};

module Decode = {
  type wrappedResult = {
    messages: array(t),
    waitTime: int,
  };

  type result = {
    results: wrappedResult,
    message: string,
  };

  /* TODO */
  let message = json => Json.Decode.{lol: json |> field("lol", int)};

  let messages = Json.Decode.array(message);

  let wrappedResult = json =>
    Json.Decode.{
      messages: json |> field("messages", messages),
      waitTime: json |> field("waitTime", int),
    };

  let result = json =>
    Json.Decode.{
      results: json |> field("results", wrappedResult),
      message: json |> field("message", string),
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
      |> then_(json =>
           json |> Decode.result |> (result => result.results) |> resolve
         )
      |> then_(({waitTime, messages}: Decode.wrappedResult) =>
           resolve(Some((waitTime, messages)))
         )
      |> catch(_err => resolve(None))
    );
  };
};
