'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var button = Css.style(/* :: */[
      Css.padding(Css.rem(0.5)),
      /* :: */[
        Css.cursor(/* pointer */-786317123),
        /* :: */[
          Css.textAlign(Css.center),
          /* :: */[
            Css.fontWeight(700),
            /* :: */[
              Css.color(Css.cornflowerblue),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var link = Css.style(/* :: */[
      Css.display(Css.block),
      /* :: */[
        Css.padding(Css.rem(0.5)),
        /* :: */[
          Css.cursor(/* pointer */-786317123),
          /* :: */[
            Css.textAlign(Css.center),
            /* :: */[
              Css.fontWeight(700),
              /* :: */[
                Css.color(Css.cornflowerblue),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

Css.$$global(" .RecastAppButton + .RecastAppButton", /* :: */[
      Css.borderTop(Css.px(1), Css.solid, Css.lightgrey),
      /* [] */0
    ]);

var Style = /* module */[
  /* button */button,
  /* link */link
];

var component = ReasonReact.statelessComponent("Button");

function make(button$1, sendMessage, _) {
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
              var title = button$1[/* title */0];
              var exit = 0;
              switch (button$1[/* type_ */2]) {
                case "phone_number" : 
                case "postback" : 
                    exit = 1;
                    break;
                case "web_url" : 
                    return React.createElement("a", {
                                className: "RecastAppButton " + link,
                                href: button$1[/* value */1],
                                target: "_blank"
                              }, title);
                default:
                  return null;
              }
              if (exit === 1) {
                return React.createElement("div", {
                            className: "RecastAppButton " + button,
                            onClick: (function () {
                                return Curry._1(sendMessage, /* Text */Block.__(0, [/* record */[/* value */button$1[/* value */1]]]));
                              })
                          }, title);
              }
              
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
/* button Not a pure module */
