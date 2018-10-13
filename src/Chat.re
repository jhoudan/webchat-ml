type state = {showSlogan: bool};

type action =
  | ();

let component = ReasonReact.reducerComponent("Chat");

let make = (~preferences: Types.preferences, _children) => {
  ...component,
  initialState: () => {showSlogan: true},
  reducer: ((), _state) => ReasonReact.NoUpdate,
  render: self =>
    <div>
      <Header preferences onClick={_event => Js.log("HEY")} />
      {ReasonReact.string(string_of_bool(self.state.showSlogan))}
    </div>,
};
