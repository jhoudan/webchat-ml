module Style = {
  open Css;

  let message = fromBot =>
    style([
      position(relative),
      display(`flex),
      justifyContent(fromBot ? flexStart : flexEnd),
    ]);

  let messageContent = fromBot =>
    style([
      display(`flex),
      flexDirection(fromBot ? row : rowReverse),
      alignItems(center),
      margin2(~v=rem(1.), ~h=rem(0.5)),
      position(relative),
    ]);
};

let component = ReasonReact.statelessComponent("Message");

let make = (~message: Messages.t, ~preferences: Preferences.t, _children) => {
  ...component,
  render: _self => {
    let {fromBot}: Messages.t = message;
    <div className={Style.message(fromBot)}>
      <div className={Style.messageContent(fromBot)}>
        {
          switch (message.attachment) {
          | Text({value}) => <Text value />
          | Picture({url}) => <Picture url />
          /* | QuickReplies(qr) => () */
          | Card(card) => <Card card />
          | Buttons(buttons) => <Buttons buttons />
          | Carousel(carousel) => <Carousel carousel />
          /* | List(wcList) => */
          | _ => ReasonReact.null
          }
        }
      </div>
    </div>;
  },
};
