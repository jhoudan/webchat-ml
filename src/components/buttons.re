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
      maxWidth(px(270)),
      padding(rem(0.8)),
      borderTopLeftRadius(px(3)),
      borderTopRightRadius(px(3)),
      whiteSpace(`preWrap),
    ]);

  let buttonsContainer = style([borderTop(px(1), solid, lightgrey)]);
};

let component = ReasonReact.statelessComponent("Buttons");

let make = (~buttons: Attachment.buttons, _children) => {
  let renderButton = (button: Attachment.button_) => <Button button />;
  {
    ...component,
    render: _self =>
      <div className=Style.buttons>
        <p
          className=Style.buttonsTitle
          style={ReactDOMRe.Style.make(~overflowWrap="break-word", ())}>
          {ReasonReact.string(buttons.bTitle)}
        </p>
        <div className=Style.buttonsContainer>
          {Array.map(renderButton, buttons.buttons) |> ReasonReact.array}
        </div>
      </div>,
  };
};
