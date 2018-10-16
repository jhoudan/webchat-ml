'use strict';

var Js_option = require("bs-platform/lib/js/js_option.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var App$ReactTemplate = require("./containers/app.bs.js");
var Preferences$ReactTemplate = require("./models/preferences.bs.js");
var Conversation$ReactTemplate = require("./models/conversation.bs.js");

var match = document.getElementById("recast-webchat");

var match$1;

if (match !== undefined) {
  var element = Js_primitive.valFromOption(match);
  match$1 = /* tuple */[
    Js_primitive.nullable_to_opt(element.getAttribute("channelid")),
    Js_primitive.nullable_to_opt(element.getAttribute("token"))
  ];
} else {
  match$1 = /* tuple */[
    undefined,
    undefined
  ];
}

var token = match$1[1];

var channelid = match$1[0];

if (channelid !== undefined && token !== undefined) {
  var credentials = /* record */[
    /* token */token,
    /* channelid */channelid
  ];
  Preferences$ReactTemplate.Api[/* fetch */0](credentials).then((function (preferences) {
              var preferences$1 = Js_option.getExn(preferences);
              return Conversation$ReactTemplate.getOrCreate(credentials).then((function (conversation) {
                            return Promise.resolve(/* tuple */[
                                        preferences$1,
                                        conversation
                                      ]);
                          }));
            })).then((function (param) {
            ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, App$ReactTemplate.make(param[0], credentials, param[1], /* array */[])), "recast-webchat-div");
            return Promise.resolve(/* () */0);
          })).catch((function (err) {
          console.error("ERROR: could not get the channel's preferences and/or create the conversation.", "Your credentials (channelid and/or token) are maybe invalid.");
          console.error(err);
          return Promise.resolve(/* () */0);
        }));
} else {
  console.error("ERROR: missing channelid and/or token field(s).");
}

exports.channelid = channelid;
exports.token = token;
/* match Not a pure module */
