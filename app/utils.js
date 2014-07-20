var _ = require("underscore");

exports.upperCaseFirst = function(s) {
  return s.length > 0 ? s[0].toUpperCase + s.slice(1) : s;
}

exports.fetch = function(obj, k) {
  assert.present(obj, k);
  return obj[k];
}

var assert = exports.assert = function(t, msg) {
  if(!t) throw new Error(msg);
}

assert.present = function(obj, k, msg) {
  assert(k in obj, msg || k + " missing");
}

_.filter(Object.keys(_), function(x) { return /^is/.test(x) }).forEach(function(k) {
  assert[k] = function(x, msg) {
    assert(_[k](x), msg || "expected " + x + " to be " + k.slice(2));
  };
});

