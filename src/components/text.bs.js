'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var text = Css.style(/* :: */[
      Css.maxWidth(Css.px(290)),
      /* :: */[
        Css.padding(Css.rem(0.8)),
        /* :: */[
          Css.borderRadius(Css.px(3)),
          /* :: */[
            Css.whiteSpace(/* preWrap */660870029),
            /* [] */0
          ]
        ]
      ]
    ]);

var Style = /* module */[/* text */text];

var component = ReasonReact.statelessComponent("Text");

function make(value, _) {
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
                          className: text,
                          style: {
                            overflowWrap: "break-word"
                          }
                        }, value);
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
/* text Not a pure module */
