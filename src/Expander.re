let component = ReasonReact.statelessComponent("Expander");

/* TODO add style props to dynamically pass style */
/* TODO add show boolean props */

let make = (~onClick, ~preferences: Types.preferences, _children) => {
  ...component,
  render: _self =>
    <div
      onClick
      className="RecastAppHeaderExpander"
      style={
        ReactDOMRe.Style.make(
          ~color=preferences.complementaryColor,
          ~backgroundColor=preferences.accentColor,
          (),
        )
      }>
      <img
        className="RecastAppExpander--logo"
        src={preferences.expanderLogo}
      />
      {ReasonReact.string(preferences.expanderTitle)}
      <div className="RecastAppExpander--onboarding">
        {ReasonReact.string(preferences.onboardingMessage)}
      </div>
    </div>,
};
