'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var picture = Css.style(/* :: */[
      Css.width(Css.px(270)),
      /* :: */[
        Css.maxHeight(Css.px(270)),
        /* :: */[
          Css.borderRadius(Css.px(3)),
          /* :: */[
            Css.border(Css.px(1), Css.solid, Css.lightgrey),
            /* [] */0
          ]
        ]
      ]
    ]);

var Style = /* module */[/* picture */picture];

var component = ReasonReact.statelessComponent("Picture");

function make(url, _) {
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
              return React.createElement("img", {
                          className: picture,
                          src: url
                        });
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
/* picture Not a pure module */
