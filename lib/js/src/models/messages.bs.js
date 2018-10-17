'use strict';

var Fetch = require("bs-fetch/lib/js/src/Fetch.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Json_decode = require("@glennsl/bs-json/lib/js/src/Json_decode.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Attachment$ReactTemplate = require("./attachment.bs.js");

function message(json) {
  return /* record */[
          /* id */Json_decode.field("id", Json_decode.string, json),
          /* attachment */Json_decode.field("attachment", Attachment$ReactTemplate.Decode[/* attachmentVariant */9], json),
          /* fromBot */Json_decode.at(/* :: */[
                  "participant",
                  /* :: */[
                    "isBot",
                    /* [] */0
                  ]
                ], Json_decode.bool)(json)
        ];
}

function result(json) {
  return /* record */[
          /* messages */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "messages",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(message, param);
                  }))(json),
          /* waitTime */Json_decode.at(/* :: */[
                  "results",
                  /* :: */[
                    "waitTime",
                    /* [] */0
                  ]
                ], Json_decode.$$int)(json)
        ];
}

var Decode = /* module */[
  /* message */message,
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
                    return Promise.resolve(result(json));
                  })).then((function (param) {
                  return Promise.resolve(/* tuple */[
                              param[/* waitTime */1],
                              param[/* messages */0]
                            ]);
                })).catch((function (err) {
                console.log(err);
                return Promise.resolve(undefined);
              }));
}

function send(param, chatId, attachment) {
  var content = Attachment$ReactTemplate.Encode[/* attachment */1](attachment);
  var payload = Js_option.getWithDefault("", Js_primitive.undefined_to_opt(JSON.stringify({
                chatId: chatId,
                message: {
                  attachment: content
                }
              })));
  var url = "https://api.recast.ai/connect/v1/webhook/" + (String(param[/* channelid */1]) + "");
  fetch(url, Fetch.RequestInit[/* make */0](/* Post */2, {
                Authorization: param[/* token */0],
                "Content-Type": "application/json"
              }, Js_primitive.some(payload), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
          return prim.json();
        }));
  return /* () */0;
}

var Api = /* module */[
  /* poll */poll,
  /* send */send
];

exports.Decode = Decode;
exports.Api = Api;
/* Attachment-ReactTemplate Not a pure module */
