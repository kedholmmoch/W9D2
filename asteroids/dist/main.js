/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(pos) {\n  MovingObject.call(this, pos);\n  // this.game = options.game;\n  this.color = Asteroid.COLOR;\n  this.radius = Asteroid.RADIUS;\n  this.vel = Util.randomVec(2);\n}\n\nAsteroid.COLOR = \"purple\";\nAsteroid.RADIUS = 15;\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nfunction Game() {\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 6;\n  this.asteroids = [];\n  this.ship = new Ship(this.randomPosition());\n}\n\nGame.prototype.addAsteroids = function () {\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  let posX = Math.random() * this.DIM_X;\n  let poxY = Math.random() * this.DIM_Y;\n  let pos = [posX, poxY];\n  return pos;\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, 1000, 600);\n  this.asteroids.forEach(asteroid => asteroid.draw(ctx));\n  this.ship.draw(ctx);\n};\n\nGame.prototype.moveObjects = function () {\n  this.asteroids.forEach(asteroid => asteroid.move());\n}\n\nGame.prototype.checkCollisions = function () { \n  for (i = 0; i < this.asteroids.length; i++) {\n    for (j = i+1; j <= this.asteroids.length - 1; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n        // alert(\"COLLISION\");\n        this.remove(this.asteroids[j]);\n        this.remove(this.asteroids[i]);\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function (asteroid) {\n  let idx = this.asteroids.indexOf(asteroid);\n\n  this.asteroids.splice(idx, 1);\n}\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\n// Game.prototype.wrap = function(posX, posY) {\n//   let newPosX;\n//   let newPosY;\n//   if ( posX < 0) {\n//     newPosX = posX + 1000;\n//   } else if ( posX > 1000 ) {\n//     newPosX = posX - 1000;\n//   }\n//   if (posY < 0) {\n//     newPosY = posY + 600;\n//   } else if (posY > 600) {\n//     newPosY = posY - 600;\n//   }\n//   return [newPosX, newPosY];\n// }\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  this.game.addAsteroids();\n  setInterval( function () {\n    that.game.step();\n    that.game.draw(that.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  window.MovingObject = MovingObject;\n  window.Asteroid = Asteroid;\n  window.Game = Game;\n  window.GameView = GameView;\n  window.Ship = Ship;\n  console.log('Webpack is working');\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext('2d');\n  const gameview = new GameView(ctx);\n  gameview.start();\n  // let obj = new MovingObject({ pos: [50, 50], vel: [1, 1], radius: 10, color: 'green' });\n  // obj.draw(ctx);\n});\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require('./game');\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  // this.game = options.game;\n}\n\nMovingObject.prototype.move = function() {\n  let newX = this.pos[0] + this.vel[0];\n  let newY = this.pos[1] + this.vel[1];\n  let newPos = this.wrap(newX, newY);\n  this.pos = newPos;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.wrap = function (posX, posY) {\n  let newPosX;\n  let newPosY;\n  if (posX < 0) {\n    newPosX = posX + 1000;\n  } else if (posX > 1000) {\n    newPosX = posX - 1000;\n  } else {\n    newPosX = posX\n  }\n  if (posY < 0) {\n    newPosY = posY + 600;\n  } else if (posY > 600) {\n    newPosY = posY - 600;\n  } else {\n    newPosY = posY\n  }\n  return [newPosX, newPosY];\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  thisX = this.pos[0];\n  thisY = this.pos[1];\n  thatX = otherObject.pos[0];\n  thatY = otherObject.pos[1];\n\n  totalRadius = this.radius + otherObject.radius;\n\n  distanceBetween = Math.sqrt((thisX - thatX) ** 2 + (thisY - thatY) ** 2);\n\n  return distanceBetween <= totalRadius;\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction Ship(pos) {\n  this.pos = pos;\n  // this.game = options.game;\n  this.color = Ship.COLOR;\n  this.radius = Ship.RADIUS;\n  this.vel = 0;\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.COLOR = \"Red\";\nShip.RADIUS = 10;\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },  // ??\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n    // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });