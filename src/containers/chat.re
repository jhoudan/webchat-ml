module Style = {
  open Css;

  let chat =
    style([
      position(fixed),
      top(px(0)),
      left(px(0)),
      width(`percent(100.)),
      height(`percent(100.)),
    ]);
};

type state = {showSlogan: bool};

type action =
  | ();

let component = ReasonReact.reducerComponent("Chat");

let make = (~preferences: Preferences.t, ~closeWebchat, _children) => {
  ...component,
  initialState: () => {showSlogan: true},
  didMount: (_self) => {
    /* TODO if no props.sendMessagePromise and show, launch doMessagePolling */
    ()
  },
  willReceiveProps: (self) => {
    /* TODO if messages received and props.getLastMessage -> getLastMessage */
    self.state
  },
  reducer: ((), _state) => ReasonReact.NoUpdate,
  render: self =>
    <div className=Style.chat>
      <Header preferences onClick=closeWebchat />
      {ReasonReact.string(string_of_bool(self.state.showSlogan))}
    </div>,
};
