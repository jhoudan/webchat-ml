'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Header$ReactTemplate = require("../components/header.bs.js");

var chat = Css.style(/* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.top(Css.px(0)),
        /* :: */[
          Css.left(Css.px(0)),
          /* :: */[
            Css.width(/* `percent */[
                  -119887163,
                  100
                ]),
            /* :: */[
              Css.height(/* `percent */[
                    -119887163,
                    100
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Style = /* module */[/* chat */chat];

var component = ReasonReact.reducerComponent("Chat");

function make(preferences, closeWebchat, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (self) {
              return self[/* state */1];
            }),
          /* didMount */(function () {
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          className: chat
                        }, ReasonReact.element(undefined, undefined, Header$ReactTemplate.make(closeWebchat, preferences, /* array */[])), Pervasives.string_of_bool(self[/* state */1][/* showSlogan */0]));
            }),
          /* initialState */(function () {
              return /* record */[/* showSlogan */true];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, _$1) {
              return /* NoUpdate */0;
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* chat Not a pure module */
