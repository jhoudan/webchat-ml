'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Card$ReactTemplate = require("./card.bs.js");
var Text$ReactTemplate = require("./text.bs.js");
var Buttons$ReactTemplate = require("./buttons.bs.js");
var Picture$ReactTemplate = require("./picture.bs.js");

function message(fromBot) {
  return Css.style(/* :: */[
              Css.position(Css.relative),
              /* :: */[
                Css.display(Css.flexBox),
                /* :: */[
                  Css.justifyContent(fromBot ? Css.flexStart : Css.flexEnd),
                  /* [] */0
                ]
              ]
            ]);
}

function messageContent(fromBot) {
  return Css.style(/* :: */[
              Css.display(Css.flexBox),
              /* :: */[
                Css.flexDirection(fromBot ? Css.row : Css.rowReverse),
                /* :: */[
                  Css.alignItems(Css.center),
                  /* :: */[
                    Css.margin2(Css.rem(1), Css.rem(0.5)),
                    /* :: */[
                      Css.position(Css.relative),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

var Style = /* module */[
  /* message */message,
  /* messageContent */messageContent
];

var component = ReasonReact.statelessComponent("Message");

function make(message$1, _, _$1) {
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
              var fromBot = message$1[/* fromBot */2];
              var match = message$1[/* attachment */1];
              var tmp;
              switch (match.tag | 0) {
                case 0 : 
                    tmp = ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(match[0][/* value */0], /* array */[]));
                    break;
                case 1 : 
                    tmp = ReasonReact.element(undefined, undefined, Picture$ReactTemplate.make(match[0][/* url */0], /* array */[]));
                    break;
                case 3 : 
                    tmp = ReasonReact.element(undefined, undefined, Card$ReactTemplate.make(match[0], /* array */[]));
                    break;
                case 4 : 
                    tmp = ReasonReact.element(undefined, undefined, Buttons$ReactTemplate.make(match[0], /* array */[]));
                    break;
                default:
                  tmp = null;
              }
              return React.createElement("div", {
                          className: message(fromBot)
                        }, React.createElement("div", {
                              className: messageContent(fromBot)
                            }, tmp));
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
/* component Not a pure module */
