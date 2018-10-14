module Style = {
  open Css;

  let chat =
    style([
      position(fixed),
      width(`percent(100.)),
      height(`percent(100.)),
      media(
        "only screen and (min-width: 420px) and (min-height: 575px)",
        [
          right(px(10)),
          bottom(px(10)),
          borderRadius(px(3)),
          width(px(370)),
          height(auto),
          boxShadow(~x=px(0), ~y=px(5), ~blur=px(40), lightgrey),
        ],
      ),
    ]);
};

type state = {
  messages: array(Messages.t),
  showSlogan: bool,
  lastMessageId: option(string),
  timeoutId: option(Js.Global.timeoutId),
};

type action =
  | Poll(string)
  | SetTimeout(Js.Global.timeoutId)
  | MessagesReceived(array(Messages.t));

let component = ReasonReact.reducerComponent("Chat");

let make =
    (
      ~preferences: Preferences.t,
      ~credentials: Types.credentials,
      ~conversation: option(Conversation.t)=?,
      ~getLastMessage=?,
      ~closeWebchat,
      _children,
    ) => {
  ...component,
  initialState: () => {
    showSlogan: true,
    lastMessageId: None,
    messages: [||],
    timeoutId: None,
  },
  didMount: self =>
    switch (conversation) {
    | Some({id}) => self.send(Poll(id))
    | None => ()
    },
  willReceiveProps: self => self.state,
  willUnmount: self =>
    switch (self.state.timeoutId) {
    | Some(id) => Js.Global.clearTimeout(id)
    | None => ()
    },
  reducer: (action, state) =>
    switch (action) {
    | SetTimeout(timeoutId) =>
      ReasonReact.Update({...state, timeoutId: Some(timeoutId)})
    | MessagesReceived(messages) =>
      let index = Array.length(messages) - 1;
      getLastMessage
      |> Js.Option.map((. callback) => callback(messages[index]))
      |> ignore;

      ReasonReact.Update({
        ...state,
        messages: Array.append(state.messages, messages),
      });
    | Poll(id) =>
      ReasonReact.SideEffects(
        (
          self =>
            Messages.Api.poll(credentials, id, state.lastMessageId)
            |> Js.Promise.then_(messagesOpt => {
                 let waitTime =
                   switch (messagesOpt) {
                   | Some((waitTime, messages))
                       when Array.length(messages) > 0 =>
                     self.send(MessagesReceived(messages));
                     waitTime * 1000;
                   | Some((waitTime, _)) => waitTime * 1000
                   | None => 1000
                   };
                 let timeoutId =
                   Js.Global.setTimeout(
                     () => self.send(Poll(id)),
                     waitTime,
                   );
                 self.send(SetTimeout(timeoutId));
                 Js.Promise.resolve();
               })
            |> ignore
        ),
      )
    },
  render: _self =>
    <div className=Style.chat>
      <Header preferences onClick=closeWebchat />
    </div>,
};
