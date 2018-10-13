// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as Chat$ReactTemplate from "./Chat.bs.js";
import * as Expander$ReactTemplate from "./Expander.bs.js";

var component = ReasonReact.reducerComponent("App");

var app = Css.style(/* :: */[
      Css.zIndex(2147483647),
      /* :: */[
        Css.fontFamily("Roboto, Helvetica, sans-serif"),
        /* [] */0
      ]
    ]);

var Style = /* module */[/* app */app];

function make(preferences, _) {
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
          /* render */(function (self) {
              var match = self[/* state */1][/* isExpanded */0];
              return React.createElement("div", {
                          className: app
                        }, Pervasives.string_of_bool(self[/* state */1][/* isExpanded */0]), match ? ReasonReact.element(undefined, undefined, Chat$ReactTemplate.make(preferences, /* array */[])) : ReasonReact.element(undefined, undefined, Expander$ReactTemplate.make((function () {
                                      return Curry._1(self[/* send */3], /* Toggle */0);
                                    }), preferences, /* array */[])));
            }),
          /* initialState */(function () {
              return /* record */[/* isExpanded */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [/* record */[/* isExpanded */!state[/* isExpanded */0]]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  component ,
  Style ,
  make ,
  
}
/* component Not a pure module */
