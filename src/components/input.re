type state = {
  value: string,
  _textareaRef: ref(option(Dom.element)),
};

type action =
  | Change(string);

let component = ReasonReact.reducerComponent("Input");

let setTextareaRef = (taRef, {ReasonReact.state}) =>
  state._textareaRef := Js.Nullable.to_opt(taRef);

let make =
    (
      ~onSubmit,
      ~placeholder: option(string)=?,
      ~charLimit: option(int)=?,
      _children,
    ) => {
  ...component,
  initialState: () => {value: "", _textareaRef: ref(None)},
  reducer: (action, state) =>
    switch (action) {
    | Change(rawValue) =>
      let trimmedValue = rawValue->String.trim;
      let value =
        charLimit
        |> Js.Option.map((. limit) =>
             String.length(trimmedValue) > limit ?
               trimmedValue->String.sub(0, limit) : trimmedValue
           )
        |> Js.Option.getWithDefault(trimmedValue);
      ReasonReact.Update({...state, value});
    },
  render: self => {
    let placeholder =
      placeholder |> Js.Option.getWithDefault("Write a reply");
    <div>
      <textarea
        ref={self.handle(setTextareaRef)}
        value={self.state.value}
        placeholder
        rows=1
        onChange={
          event => self.send(Change(ReactEvent.Form.target(event)##value))
        }
      />
    </div>;
  },
};
