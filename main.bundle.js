/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	$(function() {
	    $('#myCanvas').hide();
	    $('#finishScreen').hide();
	    $('#winScreen').hide();
	    $('#splashScreen').show();
	    startGameScreen();
	});

	function startGameScreen() {
	  playIntro();
	  $('.start-btn').on('click', function() {
	    $('#splashScreen').hide();
	    $('#winScreen').hide();
	    $('#myCanvas').show();
	    playMain();
	});
	}

	function endGameScreen() {
	  playDead();
	  $('#myCanvas').hide();
	  $('#splashScreen').hide();
	  $('#winScreen').hide();
	  $('#finishScreen').show();
	  clickTryAgain();
	  clickHome();
	}

	function winGameScreen() {
	  //playwinmusic
	  $('#myCanvas').hide();
	  $('#splashScreen').hide();
	  $('#winScreen').show();
	  $('#finishScreen').hide();
	  clickTryAgainWin();
	  clickHomeWin();
	}

	function clickTryAgainWin() {
	  $('.win-try-again-btn').on('click', function() {
	    resetCanvas();
	    $('#winScreen').hide();
	  });
	}

	function clickHomeWin() {
	$('.win-home-btn').on('click', function() {
	  document.location.reload(true);
	});
	}

	function clickTryAgain() {
	  $('.try-again-btn').on('click', function() {
	    resetCanvas();
	  });
	}

	function clickHome() {
	$('.home-btn').on('click', function() {
	  document.location.reload(true);
	});
	}


	var Frog = __webpack_require__(1);
	var CarLeft = __webpack_require__(2);
	var CarRight = __webpack_require__(3);
	var Score = __webpack_require__(4);
	var Level = __webpack_require__(5);

	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');


	var score = new Score();
	var level = new Level();
	var frog = new Frog((canvas.width-35)/2, (canvas.height-55), 35 , 35, canvas);
	var frogs = [];
	var frog1 = new Frog(470, 570, 25 , 25, canvas);
	var frog2 = new Frog(435, 570, 25 , 25, canvas);
	var frog3 = new Frog(400, 570, 25 , 25, canvas);


	var frogImg = document.getElementById("frog-img");
	var taxiLeft = document.getElementById("taxi-left");
	var taxiRight = document.getElementById("taxi-right");
	var splashScreenAudio = document.getElementById('happy-music');
	var gameOverAudio = document.getElementById('end-music');
	var jumpAudio = document.getElementById('jump-music');

	function playMain() {
	  splashScreenAudio.play();
	  gameOverAudio.pause();
	}

	function playIntro() {
	splashScreenAudio.play();
	gameOverAudio.pause();
	}

	function playDead() {
	  gameOverAudio.play();
	  splashScreenAudio.pause();
	}


	function winCollision () {
	  if (frog.y < 95) {
	    if(updateLevel === 3) {
	      $('#myCanvas').hide();
	      $('#winScreen').show();
	    } else {
	      incrementSpeeds();
	      updateLevel++;
	      sendToFrontReset();
	    }
	    winGameScreen();
	  }
	}

	function incrementSpeeds(){
	  carLeft.forEach(function(car) {
	    car.vx = car.vx + .5;
	  });
	  carRight.forEach(function(car){
	    car.vx = car.vx + .5;
	  });
	}

	function resetCanvas() {
	  frog.x = (canvas.width-35)/2;
	  frog.y = canvas.height - 55;
	  updateScore -= updateScore;
	  updateLevel -= updateLevel;
	  lives = 3;
	  frog3.width = 25;
	  frog2.width = 25;
	  carLeft.forEach(function(car) {
	    car.vx = 1;
	  });
	  carRight.forEach(function(car) {
	    car.vx = 1;
	  });
	  playMain();
	  $('#finishScreen').hide();
	  $("#myCanvas").show();
	}

	function sendToFrontReset() {
	  frog.x = (canvas.width-35)/2;
	  frog.y = canvas.height - 55;
	  $('#finishScreen').hide();
	  $("#myCanvas").show();
	}

	var carLeft = [];
	var carRight = [];

	carLeft.push(new CarLeft(600, 96, 1, 50, 50));
	carLeft.push(new CarLeft(470, 96, 1, 50, 50));
	carLeft.push(new CarLeft(230, 96, 1, 50, 50));
	carLeft.push(new CarLeft(280, 96, 1, 50, 50));

	carRight.push(new CarRight(600, 151, 1, 50, 50));
	carRight.push(new CarRight(470, 151, 1, 50, 50));
	carRight.push(new CarRight(230, 151, 1, 50, 50));
	carRight.push(new CarRight(280, 151, 1, 50, 50));

	carLeft.push(new CarLeft(220, 206, 1, 70, 50));
	carLeft.push(new CarLeft(420, 206, 1, 70, 50));
	carLeft.push(new CarLeft(520, 206, 1, 70, 50));

	carRight.push(new CarRight(600, 317.5, 1, 50, 50));
	carRight.push(new CarRight(470, 317.5, 1, 50, 50));
	carRight.push(new CarRight(230, 317.5, 1, 50, 50));
	carRight.push(new CarRight(280, 317.5, 1, 50, 50));

	carLeft.push(new CarLeft(120, 372.5, 1, 100, 50));
	carLeft.push(new CarLeft(320, 372.5, 1, 100, 50));
	carLeft.push(new CarLeft(520, 372.5, 1, 100, 50));

	carRight.push(new CarRight(550, 427.5, 1, 50, 50));
	carRight.push(new CarRight(450, 427.5, 1, 50, 50));
	carRight.push(new CarRight(250, 427.5, 1, 50, 50));
	carRight.push(new CarRight(150, 427.5, 1, 50, 50));

	carLeft.push(new CarLeft(550, 482.5, 1, 50, 50));
	carLeft.push(new CarLeft(450, 482.5, 1, 50, 50));
	carLeft.push(new CarLeft(250, 482.5, 1, 50, 50));
	carLeft.push(new CarLeft(150, 482.5, 1, 50, 50));

	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;

	var updateScore = 0;
	var updateLevel = 1;


	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(event) {

	  event.preventDefault();

	  if (event.keyCode === 39) {
	    if(rightPressed === false) {
	      frog.moveRight();
	      rightPressed = true;
	    }

	  } else if (event.keyCode === 37) {
	      if (leftPressed === false) {
	        frog.moveLeft();

	        leftPressed = true;
	      }

	  } else if (event.keyCode === 38) {
	    if (upPressed === false) {
	      frog.moveUp();
	      upPressed = true;
	      return updateScore += 10;
	    }

	  } else if (event.keyCode === 40) {
	    if (downPressed === false) {
	      frog.moveDown();
	      downPressed = true;
	      return updateScore -= 10;
	    }
	  }
	}

	function keyUpHandler(event) {
	  if (event.keyCode === 39) {
	    rightPressed = false;
	  } else if (event.keyCode === 37) {
	    leftPressed = false;
	  } else if (event.keyCode === 38) {
	    upPressed = false;
	  } else if (event.keyCode === 40) {
	    downPressed = false;
	  }
	}

	var lives = 3;

	function collideCar(car){
	  if (frog.x < car.x + car.width &&
	    frog.x + frog.width > car.x &&
	    frog.y < car.y + car.height &&
	    frog.height + frog.y > car.y) {
	      lives --;
	      decreaseLives();
	  }
	}


	function decreaseLives() {
	  if (lives === 2) {
	    frog3.width = 0;
	    sendToFrontReset();
	  } else if (lives === 1) {
	    frog2.width = 0;
	    sendToFrontReset();
	  } else if (lives === 0) {
	    endGameScreen();
	  }
	}


	function drawLeftCar(carArray, taxiImage) {
	  carArray.forEach(function(car) {
	    car.draw(context, taxiImage);
	  });
	  carArray.forEach(function(car) {
	    car.moveLeft(context);
	    collideCar(car);
	  });
	}

	function drawRightCar(carArray, taxiImage) {
	  carArray.forEach(function(car) {
	    car.draw(context, taxiImage);
	  });
	  carArray.forEach(function(car) {
	    car.moveRight(context);
	    collideCar(car);
	  });
	}

	function moveCars() {
	  drawLeftCar(carLeft, taxiLeft);
	  drawRightCar(carRight, taxiRight);
	}

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  frog.drawFrog(context, frogImg);
	  frogs.forEach(function(frogs, i){
	     frogs.drawFrog(context, frogImg);
	   });
	  frog1.drawFrog(context, frogImg);
	  frog2.drawFrog(context, frogImg);
	  frog3.drawFrog(context, frogImg);
	  winCollision();
	  moveCars();
	  requestAnimationFrame(gameLoop);
	  score.draw(context, updateScore);
	  level.draw(context, updateLevel);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var carLeft = __webpack_require__(2);
	var carRight = __webpack_require__(3);

	function Frog(x, y, width, height, canvas){
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.canvas = canvas;
	}

	Frog.prototype.drawFrog = function(context, frogImg) {
	  context.beginPath();
	  context.drawImage(frogImg, this.x, this.y, this.width, this.height);
	  context.fillStyle = "transparent";
	  context.fill();
	  context.closePath();
	};

	Frog.prototype.moveRight = function(){
	  if(this.canMoveRight()){
	    this.x +=30;
	  }
	};

	Frog.prototype.canMoveRight = function(){
	  return this.x < this.canvas.width-this.width*2;
	};


	Frog.prototype.moveLeft = function(){
	  if(this.canMoveLeft()){
	    this.x -=30;
	  }
	};

	Frog.prototype.canMoveLeft = function(){
	  return this.x > (0 + this.width);
	};

	Frog.prototype.moveUp = function(){
	  if(this.canMoveUp()){
	    this.y -= 55;
	  }
	};

	Frog.prototype.canMoveUp = function(){
	  return this.y > 0;
	};

	Frog.prototype.moveDown = function(){
	  if(this.canMoveDown()){
	    this.y += 55;
	  }
	};

	Frog.prototype.canMoveDown = function(){
	  return this.y < this.canvas.height-this.height*2;
	};



	module.exports = Frog;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(1);
	var carRight = __webpack_require__(3);

	function CarLeft (x, y, vx, width, height){
	 this.x = x;
	 this.y = y;
	 this.vx = vx;
	 this.width = width;
	 this.height = height;
	}

	CarLeft.prototype.draw = function(context, taxiLeft) {
	  context.fillStyle = 'transparent';
	context.drawImage(taxiLeft, this.x, this.y, this.width, this.height);
	return this;
	};

	CarLeft.prototype.moveLeft =
	function(context) {
	  this.x -= this.vx;
	  if (this.x < (0 - this.width)) {
	    this.x = 600 + this.width;
	    return this;
	  }
	};

	module.exports = CarLeft;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(1);
	var carLeft = __webpack_require__(2);

	function CarRight(x, y, vx, width, height){
	  this.x = x;
	  this.y = y;
	  this.vx = vx;
	  this.width = width;
	  this.height = height;
	}

	CarRight.prototype.draw = function (context, taxiRight) {
	  context.fillStyle = 'transparent';
	  context.drawImage(taxiRight, this.x, this.y, this.width, this.height);
	  return this;
	};

	CarRight.prototype.moveRight =
	function(context) {
	  this.x += this.vx;
	  if (this.x > 600) {
	    this.x = (0 - this.width);
	    return this;
	  }
	};

	module.exports = CarRight;


/***/ },
/* 4 */
/***/ function(module, exports) {

	function Score(){

	}

	Score.prototype.draw = function(context, updateScore) {
	  context.fillStyle = "white";
	  context.font = ('20px Krungthep');
	  context.fillText('Score:' + updateScore, 5, 590);
	  return this;
	};

	module.exports = Score;


/***/ },
/* 5 */
/***/ function(module, exports) {

	function Level(){

	}

	Level.prototype.draw = function(context, updateLevel) {
	  context.fillStyle = "white";
	  context.font = ('20px Krungthep');
	  context.fillText('Level:' + updateLevel, 5, 20);
	  return this;
	};

	module.exports = Level;


/***/ }
/******/ ]);