'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function preferences(json) {
  return /* record */[
          /* accentColor */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "accentColor",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* complementaryColor */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "complementaryColor",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* botMessageColor */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "botMessageColor",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* botMessageBackgroundColor */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "botMessageBackgroundColor",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* backgroundColor */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "backgroundColor",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* headerLogo */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "headerLogo",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* headerTitle */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "headerTitle",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* botPicture */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "botPicture",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* userPicture */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "userPicture",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* onboardingMessage */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "onboardingMessage",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* expanderLogo */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "expanderLogo",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* expanderTitle */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "expanderTitle",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* conversationTimeToLive */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "conversationTimeToLive",
                    /* [] */0
                  ]
                ], Json_decode.$$int)(json),
          /* openingType */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "openingType",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* welcomeMessage */Json_decode.optional(Json_decode.at(/* :: */[
                    "results",
                    /* :: */[
                      "welcomeMessage",
                      /* [] */0
                    ]
                  ], Json_decode.string), json)
        ];
}

var Decode = /* module */[/* preferences */preferences];

function fetch$1(param) {
  return fetch("https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + "/preferences"), Fetch.RequestInit[/* make */0](undefined, {
                          Authorization: param[/* token */0]
                        }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  return Promise.resolve(preferences(json));
                })).catch((function () {
                return Promise.resolve(undefined);
              }));
}

var Api = /* module */[/* fetch */fetch$1];

exports.Decode = Decode;
exports.Api = Api;
/* No side effect */
