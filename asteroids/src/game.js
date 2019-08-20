const Asteroid = require("./asteroid");
const Ship = require("./ship");


function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 6;
  this.asteroids = [];
  this.ship = new Ship(this.randomPosition());
}

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
  }
};

Game.prototype.randomPosition = function () {
  let posX = Math.random() * this.DIM_X;
  let poxY = Math.random() * this.DIM_Y;
  let pos = [posX, poxY];
  return pos;
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 1000, 600);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
  this.ship.draw(ctx);
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(asteroid => asteroid.move());
}

Game.prototype.checkCollisions = function () { 
  for (i = 0; i < this.asteroids.length; i++) {
    for (j = i+1; j <= this.asteroids.length - 1; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        // alert("COLLISION");
        this.remove(this.asteroids[j]);
        this.remove(this.asteroids[i]);
      }
    }
  }
};

Game.prototype.remove = function (asteroid) {
  let idx = this.asteroids.indexOf(asteroid);

  this.asteroids.splice(idx, 1);
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

// Game.prototype.wrap = function(posX, posY) {
//   let newPosX;
//   let newPosY;
//   if ( posX < 0) {
//     newPosX = posX + 1000;
//   } else if ( posX > 1000 ) {
//     newPosX = posX - 1000;
//   }
//   if (posY < 0) {
//     newPosY = posY + 600;
//   } else if (posY > 600) {
//     newPosY = posY - 600;
//   }
//   return [newPosX, newPosY];
// }

module.exports = Game;