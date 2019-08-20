const MovingObject = require("./moving_object");
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view");
const Ship = require("./ship")


window.addEventListener('DOMContentLoaded', (event) => {
  window.MovingObject = MovingObject;
  window.Asteroid = Asteroid;
  window.Game = Game;
  window.GameView = GameView;
  window.Ship = Ship;
  console.log('Webpack is working');
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');
  const gameview = new GameView(ctx);
  gameview.start();
  // let obj = new MovingObject({ pos: [50, 50], vel: [1, 1], radius: 10, color: 'green' });
  // obj.draw(ctx);
});




