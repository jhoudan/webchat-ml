module Style = {
  open Css;

  let app = style([zIndex(2147483647)]);

  global(
    "#RecastWebchat *",
    [boxSizing(borderBox), fontFamily("Roboto, Helvetica, sans-serif")],
  );

  global(
    "#RecastWebchat img, #RecastWebchat svg",
    [maxWidth(`percent(100.)), display(block)],
  );
};

type state = {isExpanded: bool};

type action =
  | Toggle;

let component = ReasonReact.reducerComponent("App");

let make =
    (
      ~preferences: Preferences.t,
      ~credentials: Types.credentials,
      ~conversation: option(Conversation.t)=?,
      _children,
    ) => {
  ...component,
  initialState: () => {
    let isExpanded =
      switch (preferences.openingType) {
      | "always" => true
      | "memory" =>
        Dom.Storage.(localStorage |> getItem("isExpanded"))
        |> Js.Option.getWithDefault("false")
        |> bool_of_string
      | _ => false
      };

    {isExpanded: isExpanded};
  },
  didMount: self =>
    /* TODO if preferences.welcomeMessage, set first message */
    /* TODO add props.onRef(this) callback ??*/
    if (self.state.isExpanded) {
      self.send(Toggle);
    },
  didUpdate: ({newSelf}) =>
    /* TODO call props.onToggle if needed */
    Dom.Storage.(
      localStorage
      |> setItem("isExpanded", newSelf.state.isExpanded |> string_of_bool)
    ),
  reducer: (Toggle, state) =>
    /* TODO if clearMessageOnClose, remove the messages from the state and closing the webchat */
    ReasonReact.Update({isExpanded: !state.isExpanded}),
  render: self =>
    <div className=Style.app id="RecastWebchat">
      {
        self.state.isExpanded ?
          <Chat
            credentials
            preferences
            closeWebchat={_event => self.send(Toggle)}
            ?conversation
          /> :
          <Expander preferences onClick={_event => self.send(Toggle)} />
      }
    </div>,
};
