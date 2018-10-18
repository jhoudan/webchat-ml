'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var ReactSlick = require("react-slick");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

var slider = Css.style(/* :: */[
      Css.maxWidth(Css.px(300)),
      /* :: */[
        Css.selector(".slick-list", /* :: */[
              Css.height(Css.auto),
              /* [] */0
            ]),
        /* :: */[
          Css.selector(".slick-prev:before", /* :: */[
                Css.important(Css.display(Css.none)),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var Style = /* module */[/* slider */slider];

function make($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, $staropt$star$6, $staropt$star$7, $staropt$star$8, prevArrow, nextArrow, children) {
  var className = $staropt$star !== undefined ? $staropt$star : slider;
  var arrows = $staropt$star$1 !== undefined ? $staropt$star$1 : true;
  var variableWidth = $staropt$star$2 !== undefined ? $staropt$star$2 : false;
  var speed = $staropt$star$3 !== undefined ? $staropt$star$3 : 200;
  var infinite = $staropt$star$4 !== undefined ? $staropt$star$4 : true;
  var draggable = $staropt$star$5 !== undefined ? $staropt$star$5 : true;
  var centerMode = $staropt$star$6 !== undefined ? $staropt$star$6 : false;
  var centerPadding = $staropt$star$7 !== undefined ? $staropt$star$7 : "10px";
  var slidesToScroll = $staropt$star$8 !== undefined ? $staropt$star$8 : 1;
  return ReasonReact.wrapJsForReason(ReactSlick.default, {
              className: "Slider " + className,
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

exports.Style = Style;
exports.make = make;
/* slider Not a pure module */
