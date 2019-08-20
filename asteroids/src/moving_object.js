// const Game = require('./game');

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  // this.game = options.game;
}

MovingObject.prototype.move = function() {
  let newX = this.pos[0] + this.vel[0];
  let newY = this.pos[1] + this.vel[1];
  let newPos = this.wrap(newX, newY);
  this.pos = newPos;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.wrap = function (posX, posY) {
  let newPosX;
  let newPosY;
  if (posX < 0) {
    newPosX = posX + 1000;
  } else if (posX > 1000) {
    newPosX = posX - 1000;
  } else {
    newPosX = posX
  }
  if (posY < 0) {
    newPosY = posY + 600;
  } else if (posY > 600) {
    newPosY = posY - 600;
  } else {
    newPosY = posY
  }
  return [newPosX, newPosY];
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
  thisX = this.pos[0];
  thisY = this.pos[1];
  thatX = otherObject.pos[0];
  thatY = otherObject.pos[1];

  totalRadius = this.radius + otherObject.radius;

  distanceBetween = Math.sqrt((thisX - thatX) ** 2 + (thisY - thatY) ** 2);

  return distanceBetween <= totalRadius;
}

module.exports = MovingObject;
