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

  let messagePicture =
    style([
      width(px(35)),
      height(px(35)),
      margin4(~top=`zero, ~right=`zero, ~bottom=`zero, ~left=rem(0.5)),
      alignSelf(`flexEnd),
    ]);
};

let component = ReasonReact.statelessComponent("Message");

let make =
    (
      ~message: Messages.t,
      ~preferences: Preferences.t,
      ~sendMessage,
      _children,
    ) => {
  ...component,
  render: _self => {
    let {fromBot}: Messages.t = message;
    let image = fromBot ? preferences.botPicture : preferences.userPicture;
    let style =
      ReactDOMRe.Style.make(
        ~color=
          fromBot ?
            preferences.botMessageColor : preferences.complementaryColor,
        ~backgroundColor=
          fromBot ?
            preferences.botMessageBackgroundColor : preferences.accentColor,
        (),
      );

    <div className={Style.message(fromBot)}>
      <div className={Style.messageContent(fromBot)}>
        <img className=Style.messagePicture src=image />
        {
          switch (message.attachment) {
          | Text({value}) => <Text value style />
          | Picture({url}) => <Picture url />
          /* | QuickReplies(qr) => () */
          | Card(card) => <Card card sendMessage />
          | Buttons(buttons) => <Buttons buttons sendMessage style />
          | Carousel(carousel) => <Carousel carousel sendMessage />
          /* | List(wcList) => */
          | _ => ReasonReact.null
          }
        }
      </div>
    </div>;
  },
};
