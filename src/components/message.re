module Style = {
  open Css;

  let message = fromBot =>
    style([
      position(relative),
      display(flexBox),
      justifyContent(fromBot ? flexStart : flexEnd),
    ]);

  let messageContent = fromBot =>
    style([
      display(flexBox),
      flexDirection(fromBot ? row : rowReverse),
      alignItems(center),
      margin2(rem(1.), rem(0.5)),
      position(relative),
    ]);
};

let component = ReasonReact.statelessComponent("Message");

let make = (~message: Messages.t, ~preferences: Preferences.t, _children) => {
  ...component,
  render: _self => {
    let {fromBot, id}: Messages.t = message;
    <div className={Style.message(fromBot)}>
      <div className={Style.messageContent(fromBot)}>
        {
          switch (message.attachment) {
          | Text({value}) => <Text value />
          | Picture({url}) => <Picture url />
          /* | QuickReplies(qr) => () */
          | Card(card) => <Card card />
          | Buttons(buttons) => <Buttons buttons />
          /* | Carouselt(carousel) => () */
          /* | List(wcList) => */
          | _ => ReasonReact.null
          }
        }
      </div>
    </div>;
  },
};
