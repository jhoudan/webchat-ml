module Style = {
  open Css;

  let header =
    style([display(`flex), alignItems(center), borderRadius(px(0))]);

  let headerLogo =
    style([height(px(50)), width(px(50)), padding(px(10))]);

  let headerTitle = style([fontWeight(700), flexGrow(1)]);

  let headerButton =
    style([
      cursor(`pointer),
      margin(rem(1.)),
      width(px(15)),
      height(px(15)),
    ]);
};

let component = ReasonReact.statelessComponent("Header");

/* TODO add logoStyle props to dynamically pass style */
/*      <img className="RecastAppHeader--logo" src={preferences.headerLogo} style={logoStyle} /> */

let make = (~onClick, ~preferences: Preferences.t, _children) => {
  ...component,
  render: _self =>
    <div
      className=Style.header
      style={
        ReactDOMRe.Style.make(
          ~color=preferences.complementaryColor,
          ~backgroundColor=preferences.accentColor,
          (),
        )
      }>
      <img src={preferences.headerLogo} className=Style.headerLogo />
      <p className=Style.headerTitle>
        {ReasonReact.string(preferences.headerTitle)}
      </p>
      <div onClick className=Style.headerButton>
        <img src="https://cdn.recast.ai/webchat/close.svg" />
      </div>
    </div>,
};
