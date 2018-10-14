'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function preferences(json) {
  return /* record */[
          /* accentColor */Json_decode.field("accentColor", Json_decode.string, json),
          /* complementaryColor */Json_decode.field("complementaryColor", Json_decode.string, json),
          /* botMessageColor */Json_decode.field("botMessageColor", Json_decode.string, json),
          /* botMessageBackgroundColor */Json_decode.field("botMessageBackgroundColor", Json_decode.string, json),
          /* backgroundColor */Json_decode.field("backgroundColor", Json_decode.string, json),
          /* headerLogo */Json_decode.field("headerLogo", Json_decode.string, json),
          /* headerTitle */Json_decode.field("headerTitle", Json_decode.string, json),
          /* botPicture */Json_decode.field("botPicture", Json_decode.string, json),
          /* userPicture */Json_decode.field("userPicture", Json_decode.string, json),
          /* onboardingMessage */Json_decode.field("onboardingMessage", Json_decode.string, json),
          /* expanderLogo */Json_decode.field("expanderLogo", Json_decode.string, json),
          /* expanderTitle */Json_decode.field("expanderTitle", Json_decode.string, json),
          /* conversationTimeToLive */Json_decode.field("conversationTimeToLive", Json_decode.$$int, json),
          /* openingType */Json_decode.field("openingType", Json_decode.string, json),
          /* welcomeMessage */Json_decode.optional((function (param) {
                  return Json_decode.field("welcomeMessage", Json_decode.string, param);
                }), json)
        ];
}

function result(json) {
  return /* record */[
          /* results */Json_decode.field("results", preferences, json),
          /* message */Json_decode.field("message", Json_decode.string, json)
        ];
}

var Decode = /* module */[
  /* preferences */preferences,
  /* result */result
];

function fetch$1(param) {
  return fetch("https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + "/preferences"), Fetch.RequestInit[/* make */0](undefined, {
                          Authorization: param[/* token */0]
                        }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                    return prim.json();
                  })).then((function (json) {
                  var result$1 = result(json);
                  return Promise.resolve(result$1[/* results */0]);
                })).catch((function () {
                return Promise.resolve(undefined);
              }));
}

var Api = /* module */[/* fetch */fetch$1];

exports.Decode = Decode;
exports.Api = Api;
/* No side effect */
