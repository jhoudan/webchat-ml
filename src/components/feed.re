module Style = {
  open Css;

  let feed =
    style([
      height(`percent(100.)),
      display(flexBox),
      flexDirection(column),
      overflowY(scroll),
      media(
        "only screen and (min-width: 420px) and (min-height: 575px)",
        [height(px(460))],
      ),
    ]);

  let container = style([flexGrow(1), paddingBottom(px(25))]);
};
type state =
  | ();

let component = ReasonReact.reducerComponent("Feed");

let make =
    (
      ~preferences: Preferences.t,
      ~messages: array(Messages.t),
      ~sendMessage,
      _children,
    ) => {
  let renderMessage = (message: Messages.t) =>
    <Message message preferences key={message.id} />;
  {
    ...component,
    initialState: () => (),
    reducer: ((), _state: state) => ReasonReact.NoUpdate,
    render: _self =>
      <div className=Style.feed>
        <div className=Style.container>
          {Array.map(renderMessage, messages) |> ReasonReact.array}
        </div>
      </div>,
  };
};
