const Game = require("./game.js");

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  let that = this;
  this.game.addAsteroids();
  setInterval( function () {
    that.game.step();
    that.game.draw(that.ctx);
  }, 20);
};

module.exports = GameView;