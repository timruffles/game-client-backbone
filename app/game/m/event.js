module.exports = require("../../model").extend({
});

module.exports.Collection = require("../../collection").extend({
  model: module.exports
});
