'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Text$ReactTemplate = require("./text.bs.js");
var Slider$ReactTemplate = require("./slider.bs.js");

var quickReplies = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* [] */0
      ]
    ]);

var quickRepliesSlider = Css.style(/* :: */[
      Css.marginTop(Css.rem(0.5)),
      /* :: */[
        Css.maxWidth(Css.px(290)),
        /* [] */0
      ]
    ]);

var quickRepliesButton = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(Css.center),
        /* :: */[
          Css.justifyContent(Css.center),
          /* :: */[
            Css.maxHeight(Css.px(30)),
            /* :: */[
              Css.padding(Css.rem(1)),
              /* :: */[
                Css.marginLeft(Css.rem(0.5)),
                /* :: */[
                  Css.cursor(/* pointer */-786317123),
                  /* :: */[
                    Css.fontWeight(700),
                    /* :: */[
                      Css.borderRadius(Css.px(25)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Style = /* module */[
  /* quickReplies */quickReplies,
  /* quickRepliesSlider */quickRepliesSlider,
  /* quickRepliesButton */quickRepliesButton
];

var component = ReasonReact.statelessComponent("QuickReplies");

function make(quickReplies$1, sendMessage, style, qrStyle, _) {
  var renderButton = function (index, button) {
    return React.createElement("div", {
                key: String(index)
              }, React.createElement("div", {
                    key: String(index),
                    className: quickRepliesButton,
                    style: qrStyle,
                    onClick: (function () {
                        return Curry._1(sendMessage, /* Text */Block.__(0, [/* record */[/* value */button[/* value */1]]]));
                      })
                  }, button[/* title */0]));
  };
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
              return React.createElement("div", {
                          className: quickReplies
                        }, ReasonReact.element(undefined, undefined, Text$ReactTemplate.make(quickReplies$1[/* qrTitle */0], style, /* array */[])), ReasonReact.element(undefined, undefined, Slider$ReactTemplate.make(quickRepliesSlider, true, true, undefined, false, false, undefined, undefined, undefined, Js_primitive.some(React.createElement("div", undefined, React.createElement("img", {
                                              src: "https://cdn.recast.ai/webchat/arrow-back.svg"
                                            }))), Js_primitive.some(React.createElement("div", undefined, React.createElement("img", {
                                              src: "https://cdn.recast.ai/webchat/arrow-forward.svg"
                                            }))), /* array */[$$Array.mapi(renderButton, quickReplies$1[/* buttons */1])])));
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
/* quickReplies Not a pure module */
