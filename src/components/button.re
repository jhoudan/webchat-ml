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
};

let component = ReasonReact.statelessComponent("Button");

let make = (~button: Attachment.button_, ~sendMessage, _children) => {
  ...component,
  render: _self => {
    let {title, value, type_}: Attachment.button_ = button;
    switch (type_) {
    | "web_url" =>
      <a className=Style.link href=value target="_blank">
        {ReasonReact.string(title)}
      </a>
    | "phone_number"
    | "postback" =>
      <div
        className=Style.button
        onClick=(_e => sendMessage(Attachment.Text({value: button.value})))>
        {ReasonReact.string(title)}
      </div>
    | _ => ReasonReact.null
    };
  },
};
