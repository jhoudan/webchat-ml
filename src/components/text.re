module Style = {
  open Css;

  let text =
    style([
      maxWidth(px(290)),
      padding(rem(0.8)),
      borderRadius(px(3)),
      whiteSpace(`preWrap),
    ]);
};

let component = ReasonReact.statelessComponent("Text");

let make = (~value, _children) => {
  ...component,
  render: _self =>
    <div
      className=Style.text
      style={ReactDOMRe.Style.make(~overflowWrap="break-word", ())}>
      {ReasonReact.string(value)}
    </div>,
};
