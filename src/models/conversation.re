type t = {
  id: string,
  connector: string,
  chatId: string,
  channel: string,
  fallbacked: bool,
};

module Decode {
  type result = {
    results: t,
    message: string,
  };

  let conversation = json =>
    Json.Decode.{
      id: json |> field("id", string),
      connector: json |> field("connector", string),
      chatId: json |> field("chatId", string),
      channel: json |> field("channel", string),
      fallbacked: json |> field("fallbacked", bool),
    };

  let result = json =>
    Json.Decode.{
      results: json |> field("results", conversation),
      message: json |> field("message", string),
    };
}

module Api {
  let create = ({channelid, token}: Types.credentials): Js.Promise.t(option(t)) => {
    Js.Promise.(
      Fetch.fetchWithInit(
        {j|https://api.recast.ai/connect/v1/webhook/$channelid/conversations|j},
        Fetch.RequestInit.make(
          ~method_=Post,
          ~headers=Fetch.HeadersInit.make({"Authorization": token}),
          ()
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(json => json |> Decode.result |> (result => Some(result.results) |> resolve))
      |> catch(_err => resolve(None))
    )
  };
}
