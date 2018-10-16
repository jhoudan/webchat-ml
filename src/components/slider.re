[@bs.module "react-slick"] external slider : ReasonReact.reactClass = "default";

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
  prevArrow: Js.nullable(ReasonReact.reactClass),
  nextArrow: Js.nullable(ReasonReact.reactClass),
};

let make = (
  ~className,
  ~arrows=true,
  ~variableWidth=false,
  ~speed=3000,
  ~infinite=true,
  ~draggable=true,
  ~centerMode=false,
  ~centerPadding="10px",
  ~slidesToScroll=1,
  ~prevArrow=?,
  ~nextArrow=?,
  children
  ) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=slider,
    ~props=jsProps(
      ~className,
      ~arrows,
      ~variableWidth,
      ~speed,
      ~infinite,
      ~draggable,
      ~centerMode,
      ~centerPadding,
      ~slidesToScroll,
      ~prevArrow=Js.Nullable.fromOption(prevArrow),
      ~nextArrow=Js.Nullable.fromOption(nextArrow)
    ),
    children,
  );

