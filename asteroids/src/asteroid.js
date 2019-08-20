const Util = require("./util");
const MovingObject = require("./moving_object");

function Asteroid(pos) {
  MovingObject.call(this, pos);
  // this.game = options.game;
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Util.randomVec(2);
}

Asteroid.COLOR = "purple";
Asteroid.RADIUS = 15;

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

