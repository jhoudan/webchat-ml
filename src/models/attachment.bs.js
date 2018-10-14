'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function textMessage(json) {
  return /* record */[
          /* type_ */Json_decode.field("type", Json_decode.string, json),
          /* content */Json_decode.field("content", Json_decode.string, json)
        ];
}

function partial_arg_000(param) {
  return Json_decode.map((function (m) {
                return /* Text */[m];
              }), textMessage, param);
}

var partial_arg = /* :: */[
  partial_arg_000,
  /* [] */0
];

function attachmentVariant(param) {
  return Json_decode.oneOf(partial_arg, param);
}

var Decode = /* module */[
  /* textMessage */textMessage,
  /* attachmentVariant */attachmentVariant
];

exports.Decode = Decode;
/* No side effect */
