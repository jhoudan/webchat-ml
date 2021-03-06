'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

var expander = Css.style(/* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.right(Css.px(10)),
        /* :: */[
          Css.bottom(Css.px(10)),
          /* :: */[
            Css.display(/* flex */-1010954439),
            /* :: */[
              Css.alignItems(Css.center),
              /* :: */[
                Css.padding2(Css.rem(0.5), Css.rem(1)),
                /* :: */[
                  Css.borderRadius(Css.px(3)),
                  /* :: */[
                    Css.cursor(/* pointer */-786317123),
                    /* :: */[
                      Css.boxShadows(/* :: */[
                            Css.boxShadow(Css.px(0), Css.px(1), Css.px(6), undefined, undefined, Css.lightgrey),
                            /* :: */[
                              Css.boxShadow(Css.px(0), Css.px(2), Css.px(32), undefined, undefined, Css.lightgrey),
                              /* [] */0
                            ]
                          ]),
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

var expanderLogo = Css.style(/* :: */[
      Css.marginRight(Css.rem(0.5)),
      /* :: */[
        Css.width(Css.px(30)),
        /* :: */[
          Css.height(Css.px(30)),
          /* [] */0
        ]
      ]
    ]);

var expanderOnboarding = Css.style(/* :: */[
      Css.backgroundColor(Css.white),
      /* :: */[
        Css.position(Css.absolute),
        /* :: */[
          Css.right(Css.px(0)),
          /* :: */[
            Css.bottom(Css.px(70)),
            /* :: */[
              Css.padding(Css.rem(0.8)),
              /* :: */[
                Css.color(Css.grey),
                /* :: */[
                  Css.boxShadow(Css.px(0), Css.px(0), Css.px(20), Css.px(3), undefined, Css.lightgrey),
                  /* :: */[
                    Css.before(/* :: */[
                          Css.contentRule(" "),
                          /* :: */[
                            Css.position(Css.absolute),
                            /* :: */[
                              Css.bottom(Css.px(-10)),
                              /* :: */[
                                Css.right(Css.px(10)),
                                /* :: */[
                                  Css.borderStyle(Css.solid),
                                  /* :: */[
                                    Css.borderTopWidth(Css.px(10)),
                                    /* :: */[
                                      Css.borderRightWidth(Css.px(10)),
                                      /* :: */[
                                        Css.borderBottomWidth(Css.px(0)),
                                        /* :: */[
                                          Css.borderLeftWidth(Css.px(10)),
                                          /* :: */[
                                            Css.borderColor(Css.transparent),
                                            /* :: */[
                                              Css.borderTopColor(Css.white),
                                              /* [] */0
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Style = /* module */[
  /* expander */expander,
  /* expanderLogo */expanderLogo,
  /* expanderOnboarding */expanderOnboarding
];

var component = ReasonReact.statelessComponent("Expander");

function make(onClick, preferences, _) {
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
                          className: expander,
                          style: {
                            backgroundColor: preferences[/* accentColor */0],
                            color: preferences[/* complementaryColor */1]
                          },
                          onClick: onClick
                        }, React.createElement("img", {
                              className: expanderLogo,
                              src: preferences[/* expanderLogo */10]
                            }), preferences[/* expanderTitle */11], React.createElement("div", {
                              className: expanderOnboarding
                            }, preferences[/* onboardingMessage */9]));
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
/* expander Not a pure module */
