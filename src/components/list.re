module Style = {
  open Css;

  let element = style([display(`flex), width(px(290))]);

  let elementImage =
    style([
      width(px(80)),
      height(px(80)),
      margin(auto),
      padding(rem(0.2)),
      borderRight(px(1), solid, lightgrey),
    ]);

  let elementContainer =
    style([
      display(`flex),
      flexDirection(column),
      width(`percent(100.)),
      padding(rem(0.2)),
    ]);

  let elementTitle = style([fontWeight(700), margin(`zero)]);

  let elementSubtitle =
    style([
      fontSize(px(14)),
      fontWeight(100),
      flexGrow(1),
      margin(`zero),
    ]);

  let elementButton =
    style([
      alignSelf(flexEnd),
      padding(rem(0.2)),
      cursor(`pointer),
      fontSize(px(14)),
      fontWeight(700),
      color(cornflowerblue),
      textDecoration(`none),
    ]);

  let list_ =
    style([
      border(px(1), solid, lightgrey),
      borderRadius(px(3)),
      selector(
        " .RecastAppListElement + .RecastAppListElement ",
        [borderTop(px(1), solid, lightgrey)],
      ),
    ]);

  let listButton = style([borderTop(px(1), solid, lightgrey)]);
};

let component = ReasonReact.statelessComponent("List");

let make = (~list_: Attachment.wcList, ~sendMessage, _children) => {
  let renderElementImage = (imageOpt: option(string)) =>
    imageOpt
    |> Js.Option.map((. image) =>
         switch (image) {
         | "" => ReasonReact.null
         | src => <img src className=Style.elementImage />
         }
       )
    |> Js.Option.getWithDefault(ReasonReact.null);

  let renderElementSubtitle = (subtitleOpt: option(string)) =>
    subtitleOpt
    |> Js.Option.map((. subtitle) =>
         <p className=Style.elementSubtitle>
           {ReasonReact.string(subtitle->Utils.truncate(50))}
         </p>
       )
    |> Js.Option.getWithDefault(ReasonReact.null);

  let renderElementButton = buttons =>
    buttons->Array.length == 0 ?
      ReasonReact.null :
      {
        let {title, value, type_}: Attachment.button_ = buttons[0];
        switch (type_) {
        | "web_url" =>
          <a
            href=value
            className=Style.elementButton
            target="_blank"
            rel="noopener noreferrer">
            {ReasonReact.string(title->Utils.truncate(20))}
          </a>
        | "postback" =>
          <div className=Style.elementButton>
            {ReasonReact.string(title->Utils.truncate(20))}
          </div>
        | _ => ReasonReact.null
        };
      };

  let renderElement = (index, card: Attachment.card) =>
    <div
      className={"RecastAppListElement " ++ Style.element}
      key={string_of_int(index)}>
      {renderElementImage(card.imageUrl)}
      <div className=Style.elementContainer>
        <p className=Style.elementTitle>
          {ReasonReact.string(card.title->Utils.truncate(25))}
        </p>
        {renderElementSubtitle(card.subtitle)}
        {renderElementButton(card.buttons)}
      </div>
    </div>;

  {
    ...component,
    render: _self =>
      <div className=Style.list_>
        {Array.mapi(renderElement, list_.elements) |> ReasonReact.array}
        {
          list_.buttons->Array.length == 0 ?
            ReasonReact.null :
            <div className=Style.listButton>
              <Button sendMessage button={list_.buttons[0]} />
            </div>
        }
      </div>,
  };
};
