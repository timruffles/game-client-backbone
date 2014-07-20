var Show = require("./game_lobby");
var NewGame = require("./game_new");

module.exports = require("../../view").extend({
  className: "lobby",
  routes: {
    ".new": "newGame",
    ".show": "gameLobby",
  },
  newGame: function(route) {
    this.showModal(NewGame);
  },
  gameLobby: function(route) {
    this.showModal(Show);
  },
  showModal: function(view, route) {
    if(this.modal) {
      this.removeChild(this.modal);
    }
    this.modal = new view({ route: route });
    this.addChild(this.modal);
    this.el.appendChild(this.modal.el);
  },
});
