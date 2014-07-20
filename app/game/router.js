var _ = require("underscore");

module.exports = require("backbone").Router.extend({

  // this app is small and the routes are simple, but in
  // a real apps with complex routes (think /clicks/external?between=2012-2014&selected=124,155,168,222)
  // which have lots of parsing/serialising logic, the router has a lot to do already
  //
  // further, if the router is responsible for switching views it'll be forced to grow with each new
  // view and nesting level in your routes - which'll quickly make an unmaintainable, untestable god-object
  routes: {
    "": "lobby.index",
    "play/:id": "play",
    "games/new": "lobby.new",
    "games/:id/lobby": "lobby.show",
    "*path": "unknown",
  },

  initialize: function() {
    this.on("route", function(routeName) {
      var route = new Route(routeName, _.rest(arguments));
      this.trigger("routed", route);
    });
  },
  
});

function Route(route, data) {
  this.route = route;
  this.data = data;
}

Route.prototype.match = function(route) {
  return this.route.indexOf(route) !== -1;
}
