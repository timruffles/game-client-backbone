var View = require("backbone").View;
var _ = require("underscore");
var utils = require("./utils");
var Collection = require("./collection");

module.exports = View.extend({
  constructor: function(opts) {
    opts = opts || {};

    // here we're assigning overrides to the shared instances
    // of router/player - the view-wide, immortal objects
    if(opts.router) this.router = opts.router;
    if(opts.player) this.player = opts.player;

    this.children = new Collection;

    View.call(this, opts);

    // if we're being created in a response to a route, ensure
    // our route-handling code is called
    if(opts.route) this.routed(opts.route);
    this.listenTo(this.router, "routed", this.routed, this);
  },
  routed: function defaultImplementation(route) {
    if(!this.routes) {
      return;
    }

    var pair = _.find(_.pairs(this.routes), function(pair) {
      return route.match( pair[0] );
    });

    if(!pair) {
      return;
    }

    var methodName = pair[1];

    var handler = this[methodName];
    utils.assert.isFunction(handler, "could not find handler method " + methodName);
    handler.call(this, route);
  },
  remove: function() {
    this.children.invoke("remove");
    this.children.reset([]);
    return this.constructor.__super__.remove.call(this);
  },
  addChild: function(child) {
    this.children.add(child);
  },
  removeChild: function() {
    child.remove();
    this.children.remove(child);
  },
});
