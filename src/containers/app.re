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

  global(
    "#RecastWebchat .slick-arrow",
    [display(`flex), important(background(white)), zIndex(2)],
  );

  global(
    "#RecastWebchat .slick-prev:before, #RecastWebchat .slick-next:before",
    [important(display(none))],
  );

  global("#RecastWebchat .slick-prev", [left(`zero)]);
  global("#RecastWebchat .slick-next", [right(`zero)]);

  global(
    "#RecastWebchat .slick-prev > img, #RecastWebchat .slick-next > img",
    [width(px(15))],
  );

  global(
    "#RecastWebchat .slick-prev, #RecastWebchat .slick-next",
    [
      width(px(25)),
      height(px(25)),
      important(display(`flex)),
      alignItems(center),
      justifyContent(center),
      important(color(grey)),
      backgroundColor(white),
      border(px(1), solid, lightgrey),
      borderRadius(px(3)),
    ],
  );

  global("#RecastWebchat .slick-disabled", [important(display(none))]);
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
      <link
        rel="stylesheet"
        type_="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type_="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
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
