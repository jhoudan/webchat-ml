module Style = {
  open Css;

  let buttons =
    style([
      width(px(270)),
      border(px(1), solid, lightgrey),
      borderRadius(px(3)),
    ]);

  let buttonsTitle =
    style([
      margin(px(0)),
      maxWidth(px(270)),
      padding(rem(0.8)),
      borderTopLeftRadius(px(3)),
      borderTopRightRadius(px(3)),
      whiteSpace(`preWrap),
    ]);

  let buttonsContainer = style([borderTop(px(1), solid, lightgrey)]);
};

let component = ReasonReact.statelessComponent("Buttons");

let make =
    (
      ~buttons: Attachment.buttons,
      ~style: ReactDOMRe.style,
      ~sendMessage,
      _children,
    ) => {
  let renderButton = (index: int, button: Attachment.button_) =>
    <Button button sendMessage key={string_of_int(index)} />;

  {
    ...component,
    render: _self => {
      let innerStyle = ReactDOMRe.Style.make(~overflowWrap="break-word", ());
      <div className=Style.buttons>
        <p
          className=Style.buttonsTitle
          style={ReactDOMRe.Style.combine(innerStyle, style)}>
          {ReasonReact.string(buttons.bTitle)}
        </p>
        <div className=Style.buttonsContainer>
          {Array.mapi(renderButton, buttons.buttons) |> ReasonReact.array}
        </div>
      </div>;
    },
  };
};
