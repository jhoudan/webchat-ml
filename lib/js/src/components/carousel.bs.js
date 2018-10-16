'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Card$ReactTemplate = require("./card.bs.js");
var Slider$ReactTemplate = require("./slider.bs.js");

var component = ReasonReact.statelessComponent("Carousel");

function make(carousel, _) {
  var renderCard = function (index, card) {
    return React.createElement("div", {
                key: String(index)
              }, ReasonReact.element(undefined, undefined, Card$ReactTemplate.make(card, /* array */[])));
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
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Slider$ReactTemplate.make(undefined, true, undefined, 200, false, false, true, "10px", 1, Js_primitive.some(React.createElement("div", undefined, React.createElement("img", {
                                              src: "https://cdn.recast.ai/webchat/arrow-back.svg"
                                            }))), Js_primitive.some(React.createElement("div", undefined, React.createElement("img", {
                                              src: "https://cdn.recast.ai/webchat/arrow-forward.svg"
                                            }))), /* array */[$$Array.mapi(renderCard, carousel[/* cards */0])])));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
