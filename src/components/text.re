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

let make = (~value, ~style: ReactDOMRe.style, _children) => {
  ...component,
  render: _self => {
    let innerStyle = ReactDOMRe.Style.make(~overflowWrap="break-word", ());
    <div
      className=Style.text
      style={ReactDOMRe.Style.combine(innerStyle, style)}>
      {ReasonReact.string(value->Utils.truncate(640))}
    </div>;
  },
};
