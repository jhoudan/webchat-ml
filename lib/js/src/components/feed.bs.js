'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Message$ReactTemplate = require("./message.bs.js");
var QuickReplies$ReactTemplate = require("./quickReplies.bs.js");

var feed = Css.style(/* :: */[
      Css.height(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.display(/* flex */-1010954439),
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

Css.$$global(" .RecastAppMessage:last-of-type ." + QuickReplies$ReactTemplate.Style[/* quickRepliesSlider */1], /* :: */[
      Css.important(Css.display(/* block */888960333)),
      /* [] */0
    ]);

var Style = /* module */[
  /* feed */feed,
  /* container */container
];

var component = ReasonReact.reducerComponent("Feed");

function setFeedRef(feedRef, param) {
  param[/* state */1][/* _feedRef */1][0] = (feedRef == null) ? undefined : Js_primitive.some(feedRef);
  return /* () */0;
}

function make(preferences, messages, sendMessage, _) {
  var renderMessage = function (message) {
    return ReasonReact.element(message[/* id */0], undefined, Message$ReactTemplate.make(message, preferences, sendMessage, /* array */[]));
  };
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (self) {
              var init = self[/* state */1];
              return /* record */[
                      /* messagesLen */messages.length,
                      /* _feedRef */init[/* _feedRef */1]
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */(function (param) {
              var self = param[/* newSelf */1];
              var match = self[/* state */1][/* _feedRef */1][0];
              var match$1 = self[/* state */1][/* messagesLen */0] !== param[/* oldSelf */0][/* state */1][/* messagesLen */0];
              if (match !== undefined && match$1) {
                var feedRef = Js_primitive.valFromOption(match);
                feedRef.scrollTop = feedRef.scrollHeight;
                return /* () */0;
              } else {
                return /* () */0;
              }
            }),
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          ref: Curry._1(self[/* handle */0], setFeedRef),
                          className: feed
                        }, React.createElement("div", {
                              className: container
                            }, $$Array.map(renderMessage, messages)));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* messagesLen */0,
                      /* _feedRef : record */[/* contents */undefined]
                    ];
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
exports.setFeedRef = setFeedRef;
exports.make = make;
/* feed Not a pure module */
