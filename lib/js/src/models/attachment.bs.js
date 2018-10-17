'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Json_decode = require("@glennsl/bs-json/lib/js/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/lib/js/src/Json_encode.bs.js");

function text(json) {
  return /* record */[/* value */Json_decode.field("content", Json_decode.string, json)];
}

function picture(json) {
  return /* record */[/* url */Json_decode.field("content", Json_decode.string, json)];
}

function button(json) {
  return /* record */[
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* value */Json_decode.field("value", Json_decode.string, json),
          /* type_ */Json_decode.withDefault("postback", (function (param) {
                  return Json_decode.field("type", Json_decode.string, param);
                }), json)
        ];
}

function quickReplies(json) {
  return /* record */[
          /* qrTitle */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "title",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* buttons */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "buttons",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(button, param);
                  }))(json)
        ];
}

function card(json) {
  return /* record */[
          /* title */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "title",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* subtitle */Json_decode.optional(Json_decode.at(/* :: */[
                    "content",
                    /* :: */[
                      "subtitle",
                      /* [] */0
                    ]
                  ], Json_decode.string), json),
          /* imageUrl */Json_decode.optional(Json_decode.at(/* :: */[
                    "content",
                    /* :: */[
                      "imageUrl",
                      /* [] */0
                    ]
                  ], Json_decode.string), json),
          /* buttons */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "buttons",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(button, param);
                  }))(json)
        ];
}

function buttons(json) {
  return /* record */[
          /* bTitle */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "title",
                    /* [] */0
                  ]
                ], Json_decode.string)(json),
          /* buttons */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "buttons",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(button, param);
                  }))(json)
        ];
}

function element(json) {
  return /* record */[
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* subtitle */Json_decode.optional((function (param) {
                  return Json_decode.field("subtitle", Json_decode.string, param);
                }), json),
          /* imageUrl */Json_decode.optional((function (param) {
                  return Json_decode.field("imageUrl", Json_decode.string, param);
                }), json),
          /* buttons */Json_decode.field("buttons", (function (param) {
                  return Json_decode.array(button, param);
                }), json)
        ];
}

function carousel(json) {
  return /* record */[/* cards */Json_decode.field("content", (function (param) {
                  return Json_decode.array(element, param);
                }), json)];
}

function wcList(json) {
  return /* record */[
          /* elements */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "elements",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(element, param);
                  }))(json),
          /* buttons */Json_decode.at(/* :: */[
                  "content",
                  /* :: */[
                    "buttons",
                    /* [] */0
                  ]
                ], (function (param) {
                    return Json_decode.array(button, param);
                  }))(json)
        ];
}

function attachmentVariant(param) {
  return Json_decode.andThen((function (type_) {
                switch (type_) {
                  case "buttons" : 
                      return (function (param) {
                          return Json_decode.map((function (b) {
                                        return /* Buttons */Block.__(4, [b]);
                                      }), buttons, param);
                        });
                  case "card" : 
                      return (function (param) {
                          return Json_decode.map((function (c) {
                                        return /* Card */Block.__(3, [c]);
                                      }), card, param);
                        });
                  case "carousel" : 
                      return (function (param) {
                          return Json_decode.map((function (c) {
                                        return /* Carousel */Block.__(5, [c]);
                                      }), carousel, param);
                        });
                  case "list" : 
                      return (function (param) {
                          return Json_decode.map((function (l) {
                                        return /* List */Block.__(6, [l]);
                                      }), wcList, param);
                        });
                  case "picture" : 
                      return (function (param) {
                          return Json_decode.map((function (p) {
                                        return /* Picture */Block.__(1, [p]);
                                      }), picture, param);
                        });
                  case "quickReplies" : 
                      return (function (param) {
                          return Json_decode.map((function (q) {
                                        return /* QuickReplies */Block.__(2, [q]);
                                      }), quickReplies, param);
                        });
                  case "text" : 
                      return (function (param) {
                          return Json_decode.map((function (t) {
                                        return /* Text */Block.__(0, [t]);
                                      }), text, param);
                        });
                  default:
                    return (function (param) {
                        return Json_decode.map((function (t) {
                                      return /* Unknown */Block.__(7, [t]);
                                    }), (function () {
                                      return type_;
                                    }), param);
                      });
                }
              }), (function (param) {
                return Json_decode.field("type", Json_decode.string, param);
              }), param);
}

var Decode = /* module */[
  /* text */text,
  /* picture */picture,
  /* button */button,
  /* quickReplies */quickReplies,
  /* card */card,
  /* buttons */buttons,
  /* element */element,
  /* carousel */carousel,
  /* wcList */wcList,
  /* attachmentVariant */attachmentVariant
];

function encodeText(text) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "type",
                "text"
              ],
              /* :: */[
                /* tuple */[
                  "content",
                  text[/* value */0]
                ],
                /* [] */0
              ]
            ]);
}

function attachment(attachment$1) {
  if (attachment$1.tag) {
    return null;
  } else {
    return encodeText(attachment$1[0]);
  }
}

var Encode = /* module */[
  /* encodeText */encodeText,
  /* attachment */attachment
];

exports.Decode = Decode;
exports.Encode = Encode;
/* Json_encode Not a pure module */
