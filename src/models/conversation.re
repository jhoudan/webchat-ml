type t = {
  id: string,
  connector: string,
  chatId: string,
  channel: string,
  expire_at: float,
};

module Encode = {
  let conversation = conversationObj =>
    Json.Encode.(
      object_([
        ("id", string(conversationObj.id)),
        ("connector", string(conversationObj.connector)),
        ("chatId", string(conversationObj.chatId)),
        ("channel", string(conversationObj.channel)),
        ("expire_at", float(conversationObj.expire_at)),
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
      expire_at: json |> withDefault(0., field("expire_at", float)),
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

let getOrCreate =
    (credentials: Types.credentials, timeToLive: float)
    : Js.Promise.t(option(t)) => {
  let conv =
    getFromLocalStorage()
    |> Js.Option.andThen((. conversation) =>
         conversation.channel == credentials.channelid
         && conversation.expire_at > Js.Date.now() ?
           Some(conversation) : None
       );

  switch (conv) {
  | Some(conv) => Js.Promise.resolve(Some(conv))
  | None =>
    Api.create(credentials)
    |> Js.Promise.then_(convOpt =>
         convOpt
         |> Js.Option.map((. conv) => {
              /* Conversation will expire in ten years if timeToLive = 0 */
              let conversationTimeToLive =
                timeToLive == 0. ? 87600. : timeToLive;
              let expire_at =
                Js.Date.now() +. conversationTimeToLive *. 3600000.;
              let convString =
                {...conv, expire_at} |> Encode.conversation |> Json.stringify;
              Dom.Storage.(
                localStorage |> setItem("conversation", convString)
              );
              conv;
            })
         |> Js.Promise.resolve
       )
  };
};
