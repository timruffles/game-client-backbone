
module.exports = require("../../model").extend({
  commanded: function(cmd) {
    if(!this.get("dead")) {
      this.get("commands").create(cmd);
    }
  }
});

module.exports.Collection = require("../../collection").extend({
  model: module.exports
});
