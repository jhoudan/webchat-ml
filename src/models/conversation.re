type t = {
  id: string,
  connector: string,
  chatId: string,
  channel: string,
};

module Encode = {
  let conversation = conversationObj =>
    Json.Encode.(
      object_([
        ("id", string(conversationObj.id)),
        ("connector", string(conversationObj.connector)),
        ("chatId", string(conversationObj.chatId)),
        ("channel", string(conversationObj.channel)),
      ])
    );
};

module Decode = {
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
    };

  let result = json =>
    Json.Decode.{
      results: json |> field("results", conversation),
      message: json |> field("message", string),
    };
};

module Api = {
  let create =
      ({channelid, token}: Types.credentials): Js.Promise.t(option(t)) =>
    Js.Promise.(
      Fetch.fetchWithInit(
        {j|https://api.recast.ai/connect/v1/webhook/$channelid/conversations|j},
        Fetch.RequestInit.make(
          ~method_=Post,
          ~headers=Fetch.HeadersInit.make({"Authorization": token}),
          (),
        ),
      )
      |> then_(Fetch.Response.json)
      |> then_(json =>
           json
           |> Decode.result
           |> (result => Some(result.results) |> resolve)
         )
      |> catch(_err => resolve(None))
    );
};

let getFromLocalStorage = (): option(t) =>
  Dom.Storage.(localStorage |> getItem("conversation"))
  |> Js.Option.andThen((. convString) => convString |> Json.parse)
  |> Js.Option.andThen((. json) =>
       json |> Decode.conversation |> (c => Some(c))
     );

let getOrCreate = (credentials: Types.credentials): Js.Promise.t(option(t)) => {
  let conv =
    getFromLocalStorage()
    |> Js.Option.andThen((. conversation) =>
         if (conversation.channel == credentials.channelid) {
           Some(conversation);
         } else {
           None;
         }
       );

  switch (conv) {
  | Some(conv) => Js.Promise.resolve(Some(conv))
  | None =>
    Api.create(credentials)
    |> Js.Promise.then_(convOpt =>
         convOpt
         |> Js.Option.map((. conv) => {
              let convString = conv |> Encode.conversation |> Json.stringify;
              Dom.Storage.(
                localStorage |> setItem("conversation", convString)
              );
              conv;
            })
         |> Js.Promise.resolve
       )
  };
};
