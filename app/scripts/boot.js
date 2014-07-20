var View = require("../view");
var AppView = require("../game/v/app");
var AppRouter = require("../game/router");
var Backbone = require("backbone");
var $ = require("jquery");
var Game = require("../game/m/game");

Backbone.$ = $;
Backbone.ajax = $.ajax;

var router = new AppRouter;
var game = new Game;

// attaching our shared, immortal objects - the router and the current player
// - we never switch instances of these so it's safe and sensible to provide
// to all views. If we want to provide a different router to a sub-system
// we can easily pass one in to the view's constructor
View.prototype.player = game.get("player");
View.prototype.router = router;

var app = new AppView({
  game: game,
});
app.$el.appendTo( document.body );

Backbone.history.start();

