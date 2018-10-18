[@bs.val]
external getElementById: string => option(Dom.element) =
  "document.getElementById";

[@bs.send] [@bs.return nullable]
external getAttribute: (Dom.element, string) => option(string) =
  "getAttribute";

[@bs.set] external setScrollTop: (Dom.element, float) => unit = "scrollTop";
