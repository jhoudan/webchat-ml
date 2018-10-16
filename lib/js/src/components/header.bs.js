'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var header = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(Css.center),
        /* :: */[
          Css.borderRadius(Css.px(0)),
          /* [] */0
        ]
      ]
    ]);

var headerLogo = Css.style(/* :: */[
      Css.height(Css.px(50)),
      /* :: */[
        Css.width(Css.px(50)),
        /* :: */[
          Css.padding(Css.px(10)),
          /* [] */0
        ]
      ]
    ]);

var headerTitle = Css.style(/* :: */[
      Css.fontWeight(700),
      /* :: */[
        Css.flexGrow(1),
        /* [] */0
      ]
    ]);

var headerButton = Css.style(/* :: */[
      Css.cursor(/* pointer */-786317123),
      /* :: */[
        Css.margin(Css.rem(1)),
        /* :: */[
          Css.width(Css.px(15)),
          /* :: */[
            Css.height(Css.px(15)),
            /* [] */0
          ]
        ]
      ]
    ]);

var Style = /* module */[
  /* header */header,
  /* headerLogo */headerLogo,
  /* headerTitle */headerTitle,
  /* headerButton */headerButton
];

var component = ReasonReact.statelessComponent("Header");

function make(onClick, preferences, _) {
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
              return React.createElement("div", {
                          className: header,
                          style: {
                            backgroundColor: preferences[/* accentColor */0],
                            color: preferences[/* complementaryColor */1]
                          }
                        }, React.createElement("img", {
                              className: headerLogo,
                              src: preferences[/* headerLogo */5]
                            }), React.createElement("p", {
                              className: headerTitle
                            }, preferences[/* headerTitle */6]), React.createElement("div", {
                              className: headerButton,
                              onClick: onClick
                            }, React.createElement("img", {
                                  src: "https://cdn.recast.ai/webchat/close.svg"
                                })));
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
/* header Not a pure module */
