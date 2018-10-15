module Style = {
  open Css;

  let picture =
    style([
      width(px(270)),
      maxHeight(px(270)),
      borderRadius(px(3)),
      border(px(1), solid, lightgrey),
    ]);
};

let component = ReasonReact.statelessComponent("Picture");

let make = (~url, _children) => {
  ...component,
  render: _self => <img src=url className=Style.picture />,
};
