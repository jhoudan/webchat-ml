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
         let preferences = Js.Option.getExn(preferences);
         Conversation.getOrCreate(credentials)
         |> then_(conversation => resolve((preferences, conversation)));
       })
    |> then_(((preferences, _conversation)) => {
         ReactDOMRe.renderToElementWithId(
           <App preferences credentials />,
           "recast-webchat-div",
         );
         resolve();
       })
    |> catch(err => {
         Js.Console.errorMany([|
           "ERROR: could not get the Channel's preferences and/or create the conversation.",
           "Your credentials (channelid and/or token) are maybe invalid",
         |]);
         Js.Console.error(err);
         resolve();
       })
  )
  |> ignore;
  ();
| _ =>
  Js.Console.error(
    "ERROR: Could not find channelid and/or token credentials.",
  )
};
