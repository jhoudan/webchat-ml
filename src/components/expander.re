module Style = {
  open Css;

  let expander =
    style([
      position(fixed),
      right(px(10)),
      bottom(px(10)),
      display(`flex),
      alignItems(center),
      padding2(~v=rem(0.5), ~h=rem(1.)),
      borderRadius(px(3)),
      cursor(`pointer),
      boxShadows([
        boxShadow(~x=px(0), ~y=px(1), ~blur=px(6), lightgrey),
        boxShadow(~x=px(0), ~y=px(2), ~blur=px(32), lightgrey),
      ]),
    ]);

  let expanderLogo =
    style([marginRight(rem(0.5)), width(px(30)), height(px(30))]);

  let expanderOnboarding =
    style([
      backgroundColor(white),
      position(absolute),
      right(px(0)),
      bottom(px(70)),
      padding(rem(0.8)),
      color(grey),
      boxShadow(
        ~x=px(0),
        ~y=px(0),
        ~blur=px(20),
        ~spread=px(3),
        lightgrey,
      ),
      before([
        contentRule(" "),
        position(absolute),
        bottom(px(-10)),
        right(px(10)),
        borderStyle(solid),
        borderTopWidth(px(10)),
        borderRightWidth(px(10)),
        borderBottomWidth(px(0)),
        borderLeftWidth(px(10)),
        borderColor(transparent),
        borderTopColor(white),
      ]),
    ]);
};

let component = ReasonReact.statelessComponent("Expander");

/* TODO add style props to dynamically pass style */

let make = (~onClick, ~preferences: Preferences.t, _children) => {
  ...component,
  render: _self =>
    <div
      onClick
      className=Style.expander
      style={
        ReactDOMRe.Style.make(
          ~color=preferences.complementaryColor,
          ~backgroundColor=preferences.accentColor,
          (),
        )
      }>
      <img className=Style.expanderLogo src={preferences.expanderLogo} />
      {ReasonReact.string(preferences.expanderTitle)}
      <div className=Style.expanderOnboarding>
        {ReasonReact.string(preferences.onboardingMessage)}
      </div>
    </div>,
};
