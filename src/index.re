let credentials: Types.credentials = {
  channelid: "3080b46d-97b5-43e9-8f5b-762bade246a1",
  token: "4032443053b639457becb97af522eac9",
};

Js.Promise.(
  Preferences.Api.fetch(credentials)
  |> then_(preferences => {
       switch (preferences) {
       | Some(preferences) =>
         ReactDOMRe.renderToElementWithId(
           <App preferences credentials />,
           "recast-webchat-div",
         )
       | None => Js.log("ERROR: Couldn't fetch the webchat preferences.")
       };
       resolve();
     })
);
