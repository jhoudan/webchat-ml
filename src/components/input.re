module Style = {
  open Css;

  let input =
    style([
      position(relative),
      bottom(px(0)),
      width(`percent(100.)),
      padding(rem(1.)),
      color(grey),
      background(white),
      boxShadow(~x=px(0), ~y=px(5), ~blur=px(40), lightgrey),
    ]);

  let textArea =
    style([
      width(`percent(100.)),
      maxHeight(px(70)),
      margin(`zero),
      padding(`zero),
      border(px(0), `none, transparent),
    ]);
};

type state = {
  value: string,
  _textareaRef: ref(option(Dom.element)),
};

type action =
  | Change(string)
  | KeyDown(int);

let component = ReasonReact.reducerComponent("Input");

let setTextareaRef = (taRef, {ReasonReact.state}) => {
  state._textareaRef := Js.Nullable.toOption(taRef);
  switch (state._textareaRef^) {
  | Some(taRef) => taRef->ReactDOMRe.domElementToObj##focus()
  | None => ()
  };
};

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
    | KeyDown(13) =>
      onSubmit(Attachment.Text({value: state.value->String.trim}));
      ReasonReact.Update({...state, value: ""});
    | KeyDown(_) => ReasonReact.NoUpdate
    | Change(rawValue) =>
      let value =
        charLimit
        |> Js.Option.map((. limit) =>
             String.length(rawValue) > limit ?
               rawValue->String.sub(0, limit) : rawValue
           )
        |> Js.Option.getWithDefault(rawValue);
      ReasonReact.Update({...state, value});
    },
  render: self => {
    let placeholder =
      placeholder |> Js.Option.getWithDefault("Write a reply");
    <div className=Style.input>
      <textarea
        ref={self.handle(setTextareaRef)}
        value={self.state.value}
        style={ReactDOMRe.Style.make(~resize="none", ())}
        className=Style.textArea
        placeholder
        rows=1
        onChange={
          event => self.send(Change(ReactEvent.Form.target(event)##value))
        }
        onKeyDown={
          event => self.send(KeyDown(ReactEvent.Keyboard.which(event)))
        }
      />
    </div>;
  },
};
