
var utils = require("../../utils");

var eventSource = require("../../persistence/event_source");
var Command = require("./command");
var Event = require("./event");
var Player = require("./player");

module.exports = require("../../model").extend({
  initialize: function() {
    this.set("commands", new Command.Collection);
    this.set("events", new Event.Collection);
    this.set("players", new Player.Collection);
    this.set("player", new Player);
    this.get("players").add([ this.get("player") ]);
  },

  handleEvent: function(evt) {
    var methodName = "handle" + utils.upperCaseFirst(evt.get("name"));
    var method = this[methodName];
    utils.assert.isFunction(method);
    method.call(this, evt);
  },
  
  sync: function(method) {
    if(method === "keepUpdated") {
      return eventSource.start(this);
    } else {
      return this.constructor.sync.apply(this, arguments);
    }
  }
});
