'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Card$ReactTemplate = require("./card.bs.js");
var List$ReactTemplate = require("./list.bs.js");
var Text$ReactTemplate = require("./text.bs.js");
var Buttons$ReactTemplate = require("./buttons.bs.js");
var Picture$ReactTemplate = require("./picture.bs.js");
var Carousel$ReactTemplate = require("./carousel.bs.js");
var QuickReplies$ReactTemplate = require("./quickReplies.bs.js");

function message(fromBot) {
  return Css.style(/* :: */[
              Css.position(Css.relative),
              /* :: */[
                Css.display(/* flex */-1010954439),
                /* :: */[
                  Css.justifyContent(fromBot ? Css.flexStart : Css.flexEnd),
                  /* [] */0
                ]
              ]
            ]);
}

function messageContent(fromBot) {
  return Css.style(/* :: */[
              Css.display(/* flex */-1010954439),
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

var messagePicture = Css.style(/* :: */[
      Css.width(Css.px(35)),
      /* :: */[
        Css.height(Css.px(35)),
        /* :: */[
          Css.margin4(/* zero */-789508312, /* zero */-789508312, /* zero */-789508312, Css.rem(0.5)),
          /* :: */[
            Css.alignSelf(/* flexEnd */924268066),
            /* [] */0
          ]
        ]
      ]
    ]);

var Style = /* module */[
  /* message */message,
  /* messageContent */messageContent,
  /* messagePicture */messagePicture
];

var component = ReasonReact.statelessComponent("Message");

function make(message$1, preferences, sendMessage, _) {
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
              var image = fromBot ? preferences[/* botPicture */7] : preferences[/* userPicture */8];
              var accentColor = preferences[/* accentColor */0];
              var qrStyle = {
                border: "1px solid " + (String(accentColor) + ""),
                color: accentColor
              };
              var style = {
                backgroundColor: fromBot ? preferences[/* botMessageBackgroundColor */3] : preferences[/* accentColor */0],
                color: fromBot ? preferences[/* botMessageColor */2] : preferences[/* complementaryColor */1]
              };
              var match = message$1[/* attachment */1];
              var tmp;
              switch (match.tag | 0) {
                case 0 : 
                    tmp = ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(match[0][/* value */0], style, /* array */[]));
                    break;
                case 1 : 
                    tmp = ReasonReact.element(undefined, undefined, Picture$ReactTemplate.make(match[0][/* url */0], /* array */[]));
                    break;
                case 2 : 
                    tmp = ReasonReact.element(undefined, undefined, QuickReplies$ReactTemplate.make(match[0], sendMessage, style, qrStyle, /* array */[]));
                    break;
                case 3 : 
                    tmp = ReasonReact.element(undefined, undefined, Card$ReactTemplate.make(match[0], sendMessage, /* array */[]));
                    break;
                case 4 : 
                    tmp = ReasonReact.element(undefined, undefined, Buttons$ReactTemplate.make(match[0], style, sendMessage, /* array */[]));
                    break;
                case 5 : 
                    tmp = ReasonReact.element(undefined, undefined, Carousel$ReactTemplate.make(match[0], sendMessage, /* array */[]));
                    break;
                case 6 : 
                    tmp = ReasonReact.element(undefined, undefined, List$ReactTemplate.make(match[0], sendMessage, /* array */[]));
                    break;
                case 7 : 
                    tmp = null;
                    break;
                
              }
              return React.createElement("div", {
                          className: message(fromBot)
                        }, React.createElement("div", {
                              className: messageContent(fromBot)
                            }, React.createElement("img", {
                                  className: messagePicture,
                                  src: image
                                }), tmp));
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
/* messagePicture Not a pure module */
