var utils = require("../../utils");

module.exports = require("../../view").extend({
  initialize: function(opts) {
    var body = utils.fetch(opts, "body");
    this.listenTo( $(body), "keydown", this.handleKey, this);
    this.listenTo( $(body), "mousemove", this.handleMove, this);

    this.canvas = utils.fetch(opts, "canvas");
  },
  handleKey: function(evt) {
    var command = KEYBOARD_COMMANDS[evt.keyCode];

    if(command) {
      this.player.commanded( command );
    }
  },
  handleMove: function(evt) {
    var pos = this.canvas.clientPositionOf(this.player);
    var angleInRads = Math.atan2( pos.y - evt.clientY, pos.x - evt.clientX );
    var direction === radsToDirection(angleInRads);

    if(this.player.get("facing") !== direction) {
      this.player.commanded({ type: "turn", direction: direction });
    }
  }
});

var KEYBOARD_COMMANDS = {
  37: { type: "move", dx: -1, dy: 0 },
  38: { type: "move", dx: 0, dy: -1 },
  39: { type: "move", dx: 1, dy: 0 },
  40: { type: "move", dx: 0, dy: 1 },
  32: { type: "attack" },
};

