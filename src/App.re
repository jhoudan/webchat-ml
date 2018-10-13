type state = {isExpanded: bool};

type action =
  | Toggle;

let component = ReasonReact.reducerComponent("App");

let make = (~preferences: Types.preferences, _children) => {
  ...component,
  initialState: () => {isExpanded: false},
  reducer: (Toggle, state) =>
    ReasonReact.Update({isExpanded: !state.isExpanded}),
  render: self =>
    <div>
      {ReasonReact.string(string_of_bool(self.state.isExpanded))}
      {
        self.state.isExpanded ?
          <Chat preferences /> :
          <Expander preferences onClick={_event => self.send(Toggle)} />
      }
    </div>,
};
