'use strict';

var Fetch = require("bs-fetch/src/Fetch.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function message(json) {
  return /* record */[/* lol */Json_decode.field("lol", Json_decode.$$int, json)];
}

function messages(param) {
  return Json_decode.array(message, param);
}

function wrappedResult(json) {
  return /* record */[
          /* messages */Json_decode.field("messages", messages, json),
          /* waitTime */Json_decode.field("waitTime", Json_decode.$$int, json)
        ];
}

function result(json) {
  return /* record */[
          /* results */Json_decode.field("results", wrappedResult, json),
          /* message */Json_decode.field("message", Json_decode.string, json)
        ];
}

var Decode = /* module */[
  /* message */message,
  /* messages */messages,
  /* wrappedResult */wrappedResult,
  /* result */result
];

function poll(param, conversationId, lastMessageId) {
  var id = Js_option.getWithDefault("", lastMessageId);
  var query = "last_message_id=" + (String(id) + "");
  return fetch("https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + ("/conversations/" + (String(conversationId) + ("/poll?" + (String(query) + ""))))), Fetch.RequestInit[/* make */0](undefined, {
                            Authorization: param[/* token */0]
                          }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
                      return prim.json();
                    })).then((function (json) {
                    return Promise.resolve(result(json)[/* results */0]);
                  })).then((function (param) {
                  return Promise.resolve(/* tuple */[
                              param[/* waitTime */1],
                              param[/* messages */0]
                            ]);
                })).catch((function () {
                return Promise.resolve(undefined);
              }));
}

var Api = /* module */[/* poll */poll];

exports.Decode = Decode;
exports.Api = Api;
/* No side effect */
