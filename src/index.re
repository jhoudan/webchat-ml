open Bindings;

let (channelid, token) =
  switch (getElementById("recast-webchat")) {
  | Some(element) => (
      getAttribute(element, "channelid"),
      getAttribute(element, "token"),
    )
  | None => (None, None)
  };


switch (channelid, token) {
| (Some(channelid), Some(token)) =>
  let credentials: Types.credentials = {channelid, token};
  Js.Promise.(
    Preferences.Api.fetch(credentials)
    |> then_(preferences => {
         let preferences: Preferences.t = Js.Option.getExn(preferences);
         Conversation.getOrCreate(
           credentials,
           preferences.conversationTimeToLive,
         )
         |> then_(conversation => resolve((preferences, conversation)));
       })
    |> then_(((preferences: Preferences.t, conversation)) => {
         ReactDOMRe.renderToElementWithId(
           <App preferences credentials ?conversation />,
           "recast-webchat-div",
         );
         resolve();
       })
    |> catch(err => {
         Js.Console.errorMany([|
           "ERROR: could not get the channel's preferences and/or create the conversation.",
           "Your credentials (channelid and/or token) are maybe invalid.",
         |]);
         Js.Console.error(err);
         resolve();
       })
  )
  |> ignore;
  ();
| _ => Js.Console.error("ERROR: missing channelid and/or token field(s).")
};
