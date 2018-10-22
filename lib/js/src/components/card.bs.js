'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Utils$ReactTemplate = require("../utils.bs.js");
var Button$ReactTemplate = require("./button.bs.js");

var card = Css.style(/* :: */[
      Css.width(Css.px(270)),
      /* :: */[
        Css.border(Css.px(1), Css.solid, Css.lightgrey),
        /* :: */[
          Css.borderRadius(Css.px(3)),
          /* [] */0
        ]
      ]
    ]);

var cardImage = Css.style(/* :: */[
      Css.width(Css.px(270)),
      /* :: */[
        Css.maxHeight(Css.px(270)),
        /* :: */[
          Css.borderTopLeftRadius(Css.px(3)),
          /* :: */[
            Css.borderTopRightRadius(Css.px(3)),
            /* [] */0
          ]
        ]
      ]
    ]);

var cardTextContainer = Css.style(/* :: */[
      Css.padding(Css.rem(0.4)),
      /* [] */0
    ]);

var cardTitle = Css.style(/* :: */[
      Css.fontWeight(700),
      /* :: */[
        Css.margin(/* zero */-789508312),
        /* [] */0
      ]
    ]);

var cardSubtitle = Css.style(/* :: */[
      Css.fontSize(Css.px(14)),
      /* :: */[
        Css.fontWeight(100),
        /* :: */[
          Css.margin(/* zero */-789508312),
          /* [] */0
        ]
      ]
    ]);

var cardButtonsContainer = Css.style(/* :: */[
      Css.borderTop(Css.px(1), Css.solid, Css.lightgrey),
      /* [] */0
    ]);

var Style = /* module */[
  /* card */card,
  /* cardImage */cardImage,
  /* cardTextContainer */cardTextContainer,
  /* cardTitle */cardTitle,
  /* cardSubtitle */cardSubtitle,
  /* cardButtonsContainer */cardButtonsContainer
];

var component = ReasonReact.statelessComponent("Card");

function make(card$1, sendMessage, _) {
  var renderImage = function (imageOpt) {
    return Js_option.getWithDefault(null, Js_option.map((function (image) {
                      return React.createElement("img", {
                                  className: cardImage,
                                  src: image
                                });
                    }), imageOpt));
  };
  var renderSubtitle = function (subtitleOpt) {
    return Js_option.getWithDefault(null, Js_option.map((function (subtitle) {
                      return React.createElement("p", {
                                  className: cardSubtitle
                                }, Utils$ReactTemplate.truncate(subtitle, 80));
                    }), subtitleOpt));
  };
  var renderButton = function (index, button) {
    return ReasonReact.element(String(index), undefined, Button$ReactTemplate.make(button, sendMessage, /* array */[]));
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var buttons = card$1[/* buttons */3];
              var match = buttons.length === 0;
              return React.createElement("div", {
                          className: card
                        }, renderImage(card$1[/* imageUrl */2]), React.createElement("div", {
                              className: cardTextContainer
                            }, React.createElement("p", {
                                  className: cardTitle
                                }, Utils$ReactTemplate.truncate(card$1[/* title */0], 80)), renderSubtitle(card$1[/* subtitle */1])), match ? null : React.createElement("div", {
                                className: cardButtonsContainer
                              }, $$Array.mapi(renderButton, buttons.slice(0, 3))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* card Not a pure module */
