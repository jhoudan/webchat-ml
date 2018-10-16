module Style = {
  open Css;

  let card =
    style([
      width(px(270)),
      border(px(1), solid, lightgrey),
      borderRadius(px(3)),
    ]);

  let cardImage =
    style([
      width(px(270)),
      maxHeight(px(270)),
      borderTopLeftRadius(px(3)),
      borderTopRightRadius(px(3)),
    ]);

  let cardTextContainer = style([padding(rem(0.4))]);

  let cardTitle = style([fontWeight(700), margin(`zero)]);

  let cardSubtitle =
    style([fontSize(px(14)), fontWeight(100), margin(`zero)]);

  let cardButtonsContainer = style([borderTop(px(1), solid, lightgrey)]);
};

let component = ReasonReact.statelessComponent("Card");

let make = (~card: Attachment.card, _children) => {
  let renderImage = (imageOpt: option(string)) =>
    imageOpt
    |> Js.Option.map((. image) =>
         <img src=image className=Style.cardImage />
       )
    |> Js.Option.getWithDefault(ReasonReact.null);

  let renderSubtitle = (subtitleOpt: option(string)) =>
    subtitleOpt
    |> Js.Option.map((. subtitle) =>
         <p className=Style.cardSubtitle> {ReasonReact.string(subtitle)} </p>
       )
    |> Js.Option.getWithDefault(ReasonReact.null);

  let renderButton = (index: int, button: Attachment.button_) =>
    <Button button key={string_of_int(index)} />;

  {
    ...component,
    render: _self => {
      let {title, subtitle, imageUrl, buttons}: Attachment.card = card;
      <div className=Style.card>
        {renderImage(imageUrl)}
        <div className=Style.cardTextContainer>
          <p className=Style.cardTitle> {ReasonReact.string(title)} </p>
          {renderSubtitle(subtitle)}
        </div>
        {
          buttons->Array.length == 0 ?
            ReasonReact.null :
            <div className=Style.cardButtonsContainer>
              {Array.mapi(renderButton, buttons) |> ReasonReact.array}
            </div>
        }
      </div>;
    },
  };
};
