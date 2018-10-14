'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Chat$ReactTemplate = require("./chat.bs.js");
var Expander$ReactTemplate = require("../components/expander.bs.js");

var app = Css.style(/* :: */[
      Css.zIndex(2147483647),
      /* [] */0
    ]);

Css.$$global("#RecastWebchat *", /* :: */[
      Css.boxSizing(Css.borderBox),
      /* :: */[
        Css.fontFamily("Roboto, Helvetica, sans-serif"),
        /* [] */0
      ]
    ]);

Css.$$global("#RecastWebchat img, #RecastWebchat svg", /* :: */[
      Css.maxWidth(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.display(Css.block),
        /* [] */0
      ]
    ]);

var Style = /* module */[/* app */app];

var component = ReasonReact.reducerComponent("App");

function make(preferences, credentials, conversation, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              if (self[/* state */1][/* isExpanded */0]) {
                return Curry._1(self[/* send */3], /* Toggle */0);
              } else {
                return 0;
              }
            }),
          /* didUpdate */(function (param) {
              localStorage.setItem("isExpanded", Pervasives.string_of_bool(param[/* newSelf */1][/* state */1][/* isExpanded */0]));
              return /* () */0;
            }),
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* isExpanded */0];
              return React.createElement("div", {
                          className: app,
                          id: "RecastWebchat"
                        }, match ? ReasonReact.element(undefined, undefined, Chat$ReactTemplate.make(preferences, credentials, conversation, undefined, (function () {
                                      return Curry._1(self[/* send */3], /* Toggle */0);
                                    }), /* array */[])) : ReasonReact.element(undefined, undefined, Expander$ReactTemplate.make((function () {
                                      return Curry._1(self[/* send */3], /* Toggle */0);
                                    }), preferences, /* array */[])));
            }),
          /* initialState */(function () {
              var match = preferences[/* openingType */13];
              var isExpanded;
              switch (match) {
                case "always" : 
                    isExpanded = true;
                    break;
                case "memory" : 
                    isExpanded = Pervasives.bool_of_string(Js_option.getWithDefault("false", Js_primitive.null_to_opt(localStorage.getItem("isExpanded"))));
                    break;
                default:
                  isExpanded = false;
              }
              return /* record */[/* isExpanded */isExpanded];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [/* record */[/* isExpanded */!state[/* isExpanded */0]]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* app Not a pure module */
