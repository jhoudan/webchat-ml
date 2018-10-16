module Style = {
  open Css;

  let carousel = style([]);
};

let component = ReasonReact.statelessComponent("Carousel");

let make = (~cards: array(Attachment.card), _children) => {
  /* let renderCard: (index, card) => { */
  /*   () */
  /* }; */
  ...component,
  render: _self =>
    <div className=Style.carousel>
      <Slider
        className="Slider"
        arrows=true
        centerMode=true
        centerPadding="10px"
        speed=200
        infinite=false
        draggable=false
        slidesToScroll=1
      />
    </div>,
};
