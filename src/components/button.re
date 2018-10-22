module Style = {
  open Css;

  let button =
    style([
      padding(rem(0.5)),
      cursor(`pointer),
      textAlign(center),
      fontWeight(700),
      color(cornflowerblue),
    ]);

  let link =
    style([
      display(block),
      padding(rem(0.5)),
      cursor(`pointer),
      textAlign(center),
      fontWeight(700),
      color(cornflowerblue),
    ]);

  global(
    " .RecastAppButton + .RecastAppButton",
    [borderTop(px(1), solid, lightgrey)],
  );
};

let component = ReasonReact.statelessComponent("Button");

let make = (~button: Attachment.button_, ~sendMessage, _children) => {
  ...component,
  render: _self => {
    let {title, value, type_}: Attachment.button_ = button;
    let truncTitle = title->Utils.truncate(20);
    switch (type_) {
    | "web_url" =>
      <a
        className={"RecastAppButton " ++ Style.link}
        href=value
        target="_blank">
        {ReasonReact.string(truncTitle)}
      </a>
    | "phone_number"
    | "postback" =>
      <div
        className={"RecastAppButton " ++ Style.button}
        onClick=(_e => sendMessage(Attachment.Text({value: button.value})))>
        {ReasonReact.string(truncTitle)}
      </div>
    | _ => ReasonReact.null
    };
  },
};
