module Style = {
  open Css;

  let slider =
    style([
      maxWidth(px(300)),
      selector(".slick-list", [height(auto)]),
      selector(".slick-prev:before", [important(display(none))]),
    ]);
};

[@bs.module "react-slick"] external slider: ReasonReact.reactClass = "default";

[@bs.deriving abstract]
type jsProps = {
  className: string,
  arrows: bool,
  variableWidth: bool,
  speed: int,
  infinite: bool,
  draggable: bool,
  centerMode: bool,
  centerPadding: string,
  slidesToScroll: int,
  prevArrow: Js.nullable(ReasonReact.reactElement),
  nextArrow: Js.nullable(ReasonReact.reactElement),
};

let make =
    (
      ~className=Style.slider,
      ~arrows=true,
      ~variableWidth=false,
      ~speed=200,
      ~infinite=true,
      ~draggable=true,
      ~centerMode=false,
      ~centerPadding="10px",
      ~slidesToScroll=1,
      ~prevArrow=?,
      ~nextArrow=?,
      children,
    ) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=slider,
    ~props=
      jsProps(
        ~className="Slider " ++ className,
        ~arrows,
        ~variableWidth,
        ~speed,
        ~infinite,
        ~draggable,
        ~centerMode,
        ~centerPadding,
        ~slidesToScroll,
        ~prevArrow=Js.Nullable.fromOption(prevArrow),
        ~nextArrow=Js.Nullable.fromOption(nextArrow),
      ),
    children,
  );
