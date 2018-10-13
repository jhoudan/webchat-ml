let component = ReasonReact.statelessComponent("Header");

/* TODO add logoStyle props to dynamically pass style */
/*      <img className="RecastAppHeader--logo" src={preferences.headerLogo} style={logoStyle} /> */

let make = (~onClick, ~preferences: Types.preferences, _children) => {
  ...component,
  render: _self =>
    <div
      className="RecastAppHeader"
      style={
        ReactDOMRe.Style.make(
          ~color=preferences.complementaryColor,
          ~backgroundColor=preferences.accentColor,
          (),
        )
      }>
      <img src={preferences.headerLogo} className="RecastAppHeader--logo" />
      <p className="RecastAppHeader--title">
        {ReasonReact.string(preferences.headerTitle)}
      </p>
      <button onClick className="RecastAppHeader--btn">
        <img src="https://cdn.recast.ai/webchat/close.svg" />
      </button>
    </div>,
};
