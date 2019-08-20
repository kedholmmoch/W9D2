const Util = require("./util");
const MovingObject = require("./moving_object");
const Game = require('./game');

function Ship(pos) {
  this.pos = pos;
  // this.game = options.game;
  this.color = Ship.COLOR;
  this.radius = Ship.RADIUS;
  this.vel = 0;
}

Util.inherits(Ship, MovingObject);

Ship.COLOR = "Red";
Ship.RADIUS = 10;

module.exports = Ship;
