'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Message$ReactTemplate = require("./message.bs.js");

var feed = Css.style(/* :: */[
      Css.height(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.display(Css.flexBox),
        /* :: */[
          Css.flexDirection(Css.column),
          /* :: */[
            Css.overflowY(Css.scroll),
            /* :: */[
              Css.media("only screen and (min-width: 420px) and (min-height: 575px)", /* :: */[
                    Css.height(Css.px(460)),
                    /* [] */0
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var container = Css.style(/* :: */[
      Css.flexGrow(1),
      /* :: */[
        Css.paddingBottom(Css.px(25)),
        /* [] */0
      ]
    ]);

var Style = /* module */[
  /* feed */feed,
  /* container */container
];

var component = ReasonReact.reducerComponent("Feed");

function make(preferences, messages, _, _$1) {
  var renderMessage = function (message) {
    return ReasonReact.element(message[/* id */0], undefined, Message$ReactTemplate.make(message, preferences, /* array */[]));
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
              return React.createElement("div", {
                          className: feed
                        }, React.createElement("div", {
                              className: container
                            }, $$Array.map(renderMessage, messages)));
            }),
          /* initialState */(function () {
              return /* () */0;
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
/* feed Not a pure module */
