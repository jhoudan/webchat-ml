'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Button$ReactTemplate = require("./button.bs.js");

var element = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.width(Css.px(290)),
        /* [] */0
      ]
    ]);

var elementImage = Css.style(/* :: */[
      Css.width(Css.px(80)),
      /* :: */[
        Css.height(Css.px(80)),
        /* :: */[
          Css.margin(Css.auto),
          /* :: */[
            Css.padding(Css.rem(0.2)),
            /* [] */0
          ]
        ]
      ]
    ]);

var elementContainer = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.borderLeft(Css.px(1), Css.solid, Css.lightgrey),
          /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* :: */[
              Css.padding(Css.rem(0.2)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var elementTitle = Css.style(/* :: */[
      Css.fontWeight(700),
      /* [] */0
    ]);

var elementSubtitle = Css.style(/* :: */[
      Css.fontSize(Css.px(14)),
      /* :: */[
        Css.fontWeight(100),
        /* :: */[
          Css.flexGrow(1),
          /* [] */0
        ]
      ]
    ]);

var elementButton = Css.style(/* :: */[
      Css.alignSelf(Css.flexEnd),
      /* :: */[
        Css.padding(Css.rem(0.2)),
        /* :: */[
          Css.cursor(/* pointer */-786317123),
          /* :: */[
            Css.fontSize(Css.px(14)),
            /* :: */[
              Css.fontWeight(700),
              /* :: */[
                Css.color(Css.cornflowerblue),
                /* :: */[
                  Css.textDecoration(/* none */-922086728),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var list_ = Css.style(/* :: */[
      Css.border(Css.px(1), Css.solid, Css.lightgrey),
      /* :: */[
        Css.borderRadius(Css.px(3)),
        /* [] */0
      ]
    ]);

var listButton = Css.style(/* :: */[
      Css.borderTop(Css.px(1), Css.solid, Css.lightgrey),
      /* [] */0
    ]);

var Style = /* module */[
  /* element */element,
  /* elementImage */elementImage,
  /* elementContainer */elementContainer,
  /* elementTitle */elementTitle,
  /* elementSubtitle */elementSubtitle,
  /* elementButton */elementButton,
  /* list_ */list_,
  /* listButton */listButton
];

var component = ReasonReact.statelessComponent("List");

function make(list_$1, _) {
  var renderElementImage = function (imageOpt) {
    return Js_option.getWithDefault(null, Js_option.map((function (image) {
                      return React.createElement("img", {
                                  className: elementImage,
                                  src: image
                                });
                    }), imageOpt));
  };
  var renderElementSubtitle = function (subtitleOpt) {
    return Js_option.getWithDefault(null, Js_option.map((function (subtitle) {
                      return React.createElement("p", {
                                  className: elementSubtitle
                                }, subtitle);
                    }), subtitleOpt));
  };
  var renderElementButton = function (buttons) {
    var match = buttons.length === 0;
    if (match) {
      return null;
    } else {
      var match$1 = Caml_array.caml_array_get(buttons, 0);
      var title = match$1[/* title */0];
      switch (match$1[/* type_ */2]) {
        case "postback" : 
            return React.createElement("div", {
                        className: elementButton
                      }, title);
        case "web_url" : 
            return React.createElement("a", {
                        className: elementButton,
                        href: match$1[/* value */1],
                        rel: "noopener noreferrer",
                        target: "_blank"
                      }, title);
        default:
          return null;
      }
    }
  };
  var renderElement = function (index, card) {
    return React.createElement("div", {
                key: String(index),
                className: element
              }, renderElementImage(card[/* imageUrl */2]), React.createElement("div", {
                    className: elementContainer
                  }, React.createElement("p", {
                        className: elementTitle
                      }, card[/* title */0]), renderElementSubtitle(card[/* subtitle */1]), renderElementButton(card[/* buttons */3])));
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
              var match = list_$1[/* buttons */1].length === 0;
              return React.createElement("div", {
                          className: list_
                        }, $$Array.mapi(renderElement, list_$1[/* elements */0]), match ? null : React.createElement("div", {
                                className: listButton
                              }, ReasonReact.element(undefined, undefined, Button$ReactTemplate.make(Caml_array.caml_array_get(list_$1[/* buttons */1], 0), /* array */[]))));
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
/* element Not a pure module */
