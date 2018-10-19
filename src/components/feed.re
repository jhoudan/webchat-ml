module Style = {
  open Css;

  let feed =
    style([
      height(`percent(100.)),
      display(`flex),
      flexDirection(column),
      overflowY(scroll),
      media(
        "only screen and (min-width: 420px) and (min-height: 575px)",
        [height(px(460))],
      ),
    ]);

  let container = style([flexGrow(1), paddingBottom(px(25))]);

  global(
    " .RecastAppMessage:last-of-type ."
    ++ QuickReplies.Style.quickRepliesSlider,
    [important(display(`block))],
  );
};

type state = {
  messagesLen: int,
  _feedRef: ref(option(Dom.element)),
};

let component = ReasonReact.reducerComponent("Feed");

let setFeedRef = (feedRef, {ReasonReact.state}) =>
  state._feedRef := Js.Nullable.toOption(feedRef);

let make =
    (
      ~preferences: Preferences.t,
      ~messages: array(Messages.t),
      ~sendMessage,
      _children,
    ) => {
  let renderMessage = (message: Messages.t) =>
    <Message message preferences sendMessage key={message.id} />;

  {
    ...component,
    initialState: () => {_feedRef: ref(None), messagesLen: 0},
    willReceiveProps: self => {
      ...self.state,
      messagesLen: messages->Array.length,
    },
    didUpdate: ({oldSelf: _self, newSelf: self}) =>
      switch (
        self.state._feedRef^,
        self.state.messagesLen != _self.state.messagesLen,
      ) {
      | (Some((feedRef: Dom.element)), true) =>
        let elem = feedRef->ReactDOMRe.domElementToObj;
        elem##scrollHeight |> float_of_int |> Bindings.setScrollTop(feedRef);
      | (_, _) => ()
      },
    reducer: ((), _state: state) => ReasonReact.NoUpdate,
    render: self =>
      <div ref={self.handle(setFeedRef)} className=Style.feed>
        <div className=Style.container>
          {Array.map(renderMessage, messages) |> ReasonReact.array}
        </div>
      </div>,
  };
};
