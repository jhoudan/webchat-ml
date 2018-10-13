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
         Js.log(err);
         Js.log(
           "Error while getting Channel's preferences or creating the conversation. Your credentials may are invalid",
         );
         resolve();
       })
  )
  |> ignore;
  ();
| _ => Js.log("ERROR: Could not find channelid and/or token credentials.")
};
