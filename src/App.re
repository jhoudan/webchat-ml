type state = {isExpanded: bool};

type action =
  | Toggle;

let component = ReasonReact.reducerComponent("App");

module Style = {
  open Css;

  let app =
    style([
      zIndex(2147483647),
      fontFamily("Roboto, Helvetica, sans-serif"),
    ]);
};

let make = (~preferences: Types.preferences, _children) => {
  ...component,
  initialState: () => {isExpanded: false},
  reducer: (Toggle, state) =>
    ReasonReact.Update({isExpanded: !state.isExpanded}),
  render: self =>
    <div className=Style.app>
      {ReasonReact.string(string_of_bool(self.state.isExpanded))}
      {
        self.state.isExpanded ?
          <Chat preferences /> :
          <Expander preferences onClick={_event => self.send(Toggle)} />
      }
    </div>,
};
