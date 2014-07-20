var _ = require("underscore");

module.exports = require("../../view").extend({

  className: "app-view",

  // here's we're just listening to the top
  // level views, rather than having to handle
  // deep linking within them. because we passed the
  // route data into constructed child views we know they'll
  // handle them if we startup on a nested link
  routed: function(route) {
    var view;
    if(route.match("lobby")) {
      view = require("./lobby");
    } else if(route.match("play")) {
      view = require("./play");
    }

    this.switchTo(new view({ route: route }));
  },

  switchTo: function(view) {
    if(this.view) {
      this.removeChild(this.modal);
    }
    this.view = view;
    this.addChild(this.view);
    this.$el.append(view.el);
  },

});
