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
  let conversation = json =>
    Json.Decode.{
      id:
        json |> oneOf([field("id", string), at(["results", "id"], string)]),
      connector:
        json
        |> oneOf([
             field("connector", string),
             at(["results", "connector"], string),
           ]),
      chatId:
        json
        |> oneOf([
             field("chatId", string),
             at(["results", "chatId"], string),
           ]),
      channel:
        json
        |> oneOf([
             field("channel", string),
             at(["results", "channel"], string),
           ]),
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
           json |> Decode.conversation |> (conv => Some(conv) |> resolve)
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
