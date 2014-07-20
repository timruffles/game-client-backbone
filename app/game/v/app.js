var _ = require("underscore");

module.exports = require("../../view").extend({

  className: "app-view",

  // here's we're just listening to the top
  // level views, rather than having to handle
  // deep linking within them. because we passed the
  // route data into constructed child views we know they'll
  // handle them if we startup on a nested link
  routes: {
    "lobby": "lobby",
    "play": "play",
  },
  lobby: function(route) {
    this.switchTo(require("./lobby"), route);
  },
  play: function(routek) {
    this.switchTo(require("./play"), route);
  },
  switchTo: function(view) {
    if(this.view) {
      this.removeChild(this.modal);
    }
    this.view = new view({ route: route });
    this.addChild(this.view);
    this.$el.append(this.view.el);
  },

});
