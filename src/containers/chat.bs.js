'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Header$ReactTemplate = require("../components/header.bs.js");
var Messages$ReactTemplate = require("../models/messages.bs.js");

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

function make(preferences, credentials, conversation, getLastMessage, closeWebchat, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (self) {
              return self[/* state */1];
            }),
          /* didMount */(function (self) {
              if (conversation !== undefined) {
                return Curry._1(self[/* send */3], /* Poll */Block.__(0, [conversation[/* id */0]]));
              } else {
                return /* () */0;
              }
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */(function (self) {
              var match = self[/* state */1][/* timeoutId */3];
              if (match !== undefined) {
                clearTimeout(Js_primitive.valFromOption(match));
                return /* () */0;
              } else {
                return /* () */0;
              }
            }),
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", {
                          className: chat
                        }, ReasonReact.element(undefined, undefined, Header$ReactTemplate.make(closeWebchat, preferences, /* array */[])), Pervasives.string_of_bool(self[/* state */1][/* showSlogan */1]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* messages : array */[],
                      /* showSlogan */true,
                      /* lastMessageId */undefined,
                      /* timeoutId */undefined
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              switch (action.tag | 0) {
                case 0 : 
                    var id = action[0];
                    return /* SideEffects */Block.__(1, [(function (self) {
                                  Messages$ReactTemplate.Api[/* poll */0](credentials, id, state[/* lastMessageId */2]).then((function (messagesOpt) {
                                          var waitTime;
                                          if (messagesOpt !== undefined) {
                                            var match = messagesOpt;
                                            var messages = match[1];
                                            var waitTime$1 = match[0];
                                            if (messages.length) {
                                              Curry._1(self[/* send */3], /* MessagesReceived */Block.__(2, [messages]));
                                              waitTime = Caml_int32.imul(waitTime$1, 1000);
                                            } else {
                                              waitTime = Caml_int32.imul(waitTime$1, 1000);
                                            }
                                          } else {
                                            waitTime = 1000;
                                          }
                                          var timeoutId = setTimeout((function () {
                                                  return Curry._1(self[/* send */3], /* Poll */Block.__(0, [id]));
                                                }), waitTime);
                                          Curry._1(self[/* send */3], /* SetTimeout */Block.__(1, [timeoutId]));
                                          return Promise.resolve(/* () */0);
                                        }));
                                  return /* () */0;
                                })]);
                case 1 : 
                    return /* Update */Block.__(0, [/* record */[
                                /* messages */state[/* messages */0],
                                /* showSlogan */state[/* showSlogan */1],
                                /* lastMessageId */state[/* lastMessageId */2],
                                /* timeoutId */Js_primitive.some(action[0])
                              ]]);
                case 2 : 
                    var messages = action[0];
                    var index = messages.length - 1 | 0;
                    Js_option.map((function (callback) {
                            return Curry._1(callback, Caml_array.caml_array_get(messages, index));
                          }), getLastMessage);
                    return /* Update */Block.__(0, [/* record */[
                                /* messages */$$Array.append(state[/* messages */0], messages),
                                /* showSlogan */state[/* showSlogan */1],
                                /* lastMessageId */state[/* lastMessageId */2],
                                /* timeoutId */state[/* timeoutId */3]
                              ]]);
                
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.make = make;
/* chat Not a pure module */
