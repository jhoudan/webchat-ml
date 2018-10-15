type text = {value: string};

type picture = {url: string};

type button_ = {
  title: string,
  value: string,
  type_: string,
};

type quickReplies = {
  qrTitle: string,
  buttons: array(button_),
};

type card = {
  title: string,
  subtitle: option(string),
  imageUrl: option(string),
  buttons: array(button_),
};

type buttons = {
  bTitle: string,
  buttons: array(button_),
};

type carousel = {cards: array(card)};

type wcList = {
  elements: array(card),
  buttons: array(button_),
};

type t =
  | Text(text)
  | Picture(picture)
  | QuickReplies(quickReplies)
  | Card(card)
  | Buttons(buttons)
  | Carousel(carousel)
  | List(wcList);

module Decode = {
  let text = json => Json.Decode.{value: json |> field("content", string)};

  let picture = json => Json.Decode.{url: json |> field("content", string)};

  let button = json =>
    Json.Decode.{
      title: json |> field("title", string),
      value: json |> field("value", string),
      type_: json |> withDefault("postback", field("type", string)),
    };

  let quickReplies = json =>
    Json.Decode.{
      qrTitle: json |> at(["content", "title"], string),
      buttons: json |> at(["content", "buttons"], array(button)),
    };

  let card = json =>
    Json.Decode.{
      title: json |> at(["content", "title"], string),
      subtitle: json |> optional(at(["content", "subtitle"], string)),
      imageUrl: json |> optional(at(["content", "imageUrl"], string)),
      buttons: json |> at(["content", "buttons"], array(button)),
    };

  let buttons = json =>
    Json.Decode.{
      bTitle: json |> at(["content", "title"], string),
      buttons: json |> at(["content", "buttons"], array(button)),
    };

  let element = json =>
    Json.Decode.{
      title: json |> field("title", string),
      subtitle: json |> optional(field("subtitle", string)),
      imageUrl: json |> optional(field("imageUrl", string)),
      buttons: json |> field("buttons", array(button)),
    };

  let carousel = json =>
    Json.Decode.{cards: json |> field("content", array(element))};

  let wcList = json =>
    Json.Decode.{
      elements: json |> at(["content", "elements"], array(element)),
      buttons: json |> at(["content", "buttons"], array(button)),
    };

  let attachmentVariant =
    Json.Decode.(
      field("type", string)
      |> andThen(type_ =>
           switch (type_) {
           | "text" => text |> map(t => Text(t))
           | "picture" => picture |> map(p => Picture(p))
           | "quickReplies" => quickReplies |> map(q => QuickReplies(q))
           | "card" => card |> map(c => Card(c))
           | "buttons" => buttons |> map(b => Buttons(b))
           | "carousel" => carousel |> map(c => Carousel(c))
           | "list" => wcList |> map(l => List(l))
           | unknown => failwith({j|Unknow type: $unknown|j})
           }
         )
    );
};
