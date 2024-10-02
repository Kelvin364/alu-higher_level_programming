#!/usr/bin/node
exports.callMeMoby = function (n, mob) {
  for (i = 0; i < n; i++) {
    mob();
  }
};
