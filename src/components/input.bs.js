'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var component = ReasonReact.reducerComponent("Input");

function setTextareaRef(taRef, param) {
  param[/* state */1][/* _textareaRef */1][0] = (taRef == null) ? undefined : Js_primitive.some(taRef);
  return /* () */0;
}

function make(_, placeholder, charLimit, _$1) {
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
              var placeholder$1 = Js_option.getWithDefault("Write a reply", placeholder);
              return React.createElement("div", undefined, React.createElement("textarea", {
                              ref: Curry._1(self[/* handle */0], setTextareaRef),
                              placeholder: placeholder$1,
                              rows: 1,
                              value: self[/* state */1][/* value */0],
                              onChange: (function ($$event) {
                                  return Curry._1(self[/* send */3], /* Change */[$$event.target.value]);
                                })
                            }));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* value */"",
                      /* _textareaRef : record */[/* contents */undefined]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var trimmedValue = $$String.trim(action[0]);
              var value = Js_option.getWithDefault(trimmedValue, Js_option.map((function (limit) {
                          var match = trimmedValue.length > limit;
                          if (match) {
                            return $$String.sub(trimmedValue, 0, limit);
                          } else {
                            return trimmedValue;
                          }
                        }), charLimit));
              return /* Update */Block.__(0, [/* record */[
                          /* value */value,
                          /* _textareaRef */state[/* _textareaRef */1]
                        ]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.setTextareaRef = setTextareaRef;
exports.make = make;
/* component Not a pure module */
