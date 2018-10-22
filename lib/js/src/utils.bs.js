'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function truncate(str, len) {
  var match = str.length > len;
  if (match) {
    return $$String.sub(str, 0, len) + "...";
  } else {
    return str;
  }
}

exports.truncate = truncate;
/* No side effect */
