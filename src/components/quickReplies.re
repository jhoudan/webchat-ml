module Style = {
  open Css;

  let quickReplies = style([display(`flex), flexDirection(column)]);

  let quickRepliesSlider =
    style([
      marginTop(rem(0.5)),
      important(display(`none)),
      maxWidth(px(290)),
    ]);

  let quickRepliesButton =
    style([
      display(`flex),
      alignItems(center),
      justifyContent(center),
      maxHeight(px(30)),
      padding(rem(1.)),
      marginLeft(rem(0.5)),
      cursor(`pointer),
      fontWeight(700),
      borderRadius(px(25)),
    ]);
};

let component = ReasonReact.statelessComponent("QuickReplies");

let make =
    (
      ~quickReplies: Attachment.quickReplies,
      ~sendMessage,
      ~style,
      ~qrStyle,
      _children,
    ) => {
  let renderButton = (index, button: Attachment.button_) =>
    <div key={string_of_int(index)}>
      <div
        key={string_of_int(index)}
        style=qrStyle
        className=Style.quickRepliesButton
        onClick={_e => sendMessage(Attachment.Text({value: button.value}))}>
        {ReasonReact.string(button.title->Utils.truncate(20))}
      </div>
    </div>;
  {
    ...component,
    render: _self =>
      <div className=Style.quickReplies>
        <Text value={quickReplies.qrTitle} style />
        <Slider
          className=Style.quickRepliesSlider
          arrows=true
          variableWidth=true
          infinite=false
          draggable=false
          prevArrow={
            <div>
              <img src="https://cdn.recast.ai/webchat/arrow-back.svg" />
            </div>
          }
          nextArrow={
            <div>
              <img src="https://cdn.recast.ai/webchat/arrow-forward.svg" />
            </div>
          }>
          {
            Array.mapi(renderButton, quickReplies.buttons) |> ReasonReact.array
          }
        </Slider>
      </div>,
  };
};
