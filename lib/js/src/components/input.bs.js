'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var input = Css.style(/* :: */[
      Css.position(Css.relative),
      /* :: */[
        Css.bottom(Css.px(0)),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.padding(Css.rem(1)),
            /* :: */[
              Css.color(Css.grey),
              /* :: */[
                Css.background(Css.white),
                /* :: */[
                  Css.boxShadow(Css.px(0), Css.px(5), Css.px(40), undefined, undefined, Css.lightgrey),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var textArea = Css.style(/* :: */[
      Css.width(/* `percent */[
            -119887163,
            100
          ]),
      /* :: */[
        Css.maxHeight(Css.px(70)),
        /* :: */[
          Css.margin(/* zero */-789508312),
          /* :: */[
            Css.padding(/* zero */-789508312),
            /* :: */[
              Css.border(Css.px(0), /* none */-922086728, Css.transparent),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var Style = /* module */[
  /* input */input,
  /* textArea */textArea
];

var component = ReasonReact.reducerComponent("Input");

function setTextareaRef(taRef, param) {
  var state = param[/* state */1];
  state[/* _textareaRef */1][0] = (taRef == null) ? undefined : Js_primitive.some(taRef);
  var match = state[/* _textareaRef */1][0];
  if (match !== undefined) {
    return Js_primitive.valFromOption(match).focus();
  } else {
    return /* () */0;
  }
}

function make(onSubmit, placeholder, charLimit, _) {
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
              return React.createElement("div", {
                          className: input
                        }, React.createElement("textarea", {
                              ref: Curry._1(self[/* handle */0], setTextareaRef),
                              className: textArea,
                              style: {
                                resize: "none"
                              },
                              placeholder: placeholder$1,
                              rows: 1,
                              value: self[/* state */1][/* value */0],
                              onKeyDown: (function ($$event) {
                                  return Curry._1(self[/* send */3], /* KeyDown */Block.__(1, [$$event.which]));
                                }),
                              onChange: (function ($$event) {
                                  return Curry._1(self[/* send */3], /* Change */Block.__(0, [$$event.target.value]));
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
              if (action.tag) {
                if (action[0] !== 13) {
                  return /* NoUpdate */0;
                } else {
                  Curry._1(onSubmit, /* Text */Block.__(0, [/* record */[/* value */$$String.trim(state[/* value */0])]]));
                  return /* Update */Block.__(0, [/* record */[
                              /* value */"",
                              /* _textareaRef */state[/* _textareaRef */1]
                            ]]);
                }
              } else {
                var rawValue = action[0];
                var value = Js_option.getWithDefault(rawValue, Js_option.map((function (limit) {
                            var match = rawValue.length > limit;
                            if (match) {
                              return $$String.sub(rawValue, 0, limit);
                            } else {
                              return rawValue;
                            }
                          }), charLimit));
                return /* Update */Block.__(0, [/* record */[
                            /* value */value,
                            /* _textareaRef */state[/* _textareaRef */1]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Style = Style;
exports.component = component;
exports.setTextareaRef = setTextareaRef;
exports.make = make;
/* input Not a pure module */
