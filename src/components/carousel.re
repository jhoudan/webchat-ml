let component = ReasonReact.statelessComponent("Carousel");

let make = (~carousel: Attachment.carousel, ~sendMessage, _children) => {
  let renderCard = (index, card) =>
    <div key={string_of_int(index)}> <Card card sendMessage /> </div>;

  {
    ...component,
    render: _self =>
      <div>
        <Slider
          arrows=true
          centerMode=true
          centerPadding="10px"
          speed=200
          infinite=false
          draggable=false
          slidesToScroll=1
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
          {Array.mapi(renderCard, carousel.cards) |> ReasonReact.array}
        </Slider>
      </div>,
  };
};
