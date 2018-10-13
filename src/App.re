type state = {isExpanded: bool};

let component = ReasonReact.reducerComponent("App");

let make = (~preferences: Types.preferences, _children) => {
  ...component,
  initialState: () => {isExpanded: false},
  reducer: ((), _) => ReasonReact.NoUpdate,
  render: self =>
    <div>
      {ReasonReact.string(string_of_bool(self.state.isExpanded))}
      <Expander preferences onClick={_event => Js.log("Trigger exander")} />
    </div>,
  /* <Header */
  /*   preferences */
  /*   onClick={(_event) => Js.log("HEY")} */
  /* /> */
};
