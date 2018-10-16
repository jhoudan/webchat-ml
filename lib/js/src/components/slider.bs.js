'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactSlick = require("react-slick");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function make(className, $staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, $staropt$star$6, $staropt$star$7, prevArrow, nextArrow, children) {
  var arrows = $staropt$star !== undefined ? $staropt$star : true;
  var variableWidth = $staropt$star$1 !== undefined ? $staropt$star$1 : false;
  var speed = $staropt$star$2 !== undefined ? $staropt$star$2 : 3000;
  var infinite = $staropt$star$3 !== undefined ? $staropt$star$3 : true;
  var draggable = $staropt$star$4 !== undefined ? $staropt$star$4 : true;
  var centerMode = $staropt$star$5 !== undefined ? $staropt$star$5 : false;
  var centerPadding = $staropt$star$6 !== undefined ? $staropt$star$6 : "10px";
  var slidesToScroll = $staropt$star$7 !== undefined ? $staropt$star$7 : 1;
  return ReasonReact.wrapJsForReason(ReactSlick.default, {
              className: className,
              arrows: arrows,
              variableWidth: variableWidth,
              speed: speed,
              infinite: infinite,
              draggable: draggable,
              centerMode: centerMode,
              centerPadding: centerPadding,
              slidesToScroll: slidesToScroll,
              prevArrow: Js_null_undefined.fromOption(prevArrow),
              nextArrow: Js_null_undefined.fromOption(nextArrow)
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
