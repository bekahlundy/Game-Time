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

	var Frog = __webpack_require__(1);
	var Cars = __webpack_require__(2);


	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');

	var frog = new Frog((canvas.width-25)/2, (canvas.height-30), 25, 25, canvas)

	var carRowOne = [];
	carRowOne.push(new Cars(100, 70, 100, 50));
	carRowOne.push(new Cars(500, 70, 130, 50));
	carRowOne.push(new Cars(300, 70, 100, 50));

	var carRowTwo = [];
	carRowTwo.push(new Cars(550, 150, 50, 50));
	carRowTwo.push(new Cars(450, 150, 50, 50));
	carRowTwo.push(new Cars(250, 150, 50, 50));
	carRowTwo.push(new Cars(150, 150, 50, 50));

	var carRowThree = [];
	carRowThree.push(new Cars(120, 230, 70, 50));
	carRowThree.push(new Cars(320, 230, 70, 50));
	carRowThree.push(new Cars(520, 230, 70, 50));

	var carRowFour = [];
	carRowFour.push(new Cars(600, 300, 50, 50));
	carRowFour.push(new Cars(470, 300, 50, 50));
	carRowFour.push(new Cars(230, 300, 50, 50));
	carRowFour.push(new Cars(280, 300, 50, 50));

	var carRowFive = [];
	carRowFive.push(new Cars(220, 440, 70, 50));
	carRowFive.push(new Cars(420, 440, 70, 50));
	carRowFive.push(new Cars(520, 440, 70, 50));

	var carRowSix = [];
	carRowSix.push(new Cars(600, 530, 50, 50));
	carRowSix.push(new Cars(470, 530, 50, 50));
	carRowSix.push(new Cars(230, 530, 50, 50));
	carRowSix.push(new Cars(280, 530, 50, 50));

	var carRowSeven = [];
	carRowSeven.push(new Cars(120, 600, 100, 50));
	carRowSeven.push(new Cars(320, 600, 100, 50));
	carRowSeven.push(new Cars(520, 600, 100, 50));

	var carRowEight = [];
	carRowEight.push(new Cars(550, 670, 50, 50));
	carRowEight.push(new Cars(450, 670, 50, 50));
	carRowEight.push(new Cars(250, 670, 50, 50));
	carRowEight.push(new Cars(150, 670, 50, 50));

	var rightPressed = false;
	var leftPressed = false;
	var upPressed = false;
	var downPressed = false;



	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(event) {

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
	    }

	  } else if (event.keyCode === 40) {
	    if (downPressed === false) {
	      frog.moveDown();
	      downPressed = true;
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

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  frog.drawFrog(context);

	  carRowOne.forEach(function(car) {
	    car.draw(context);
	});
	  carRowOne.forEach(function(car) {
	    car.moveOne(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead1');
	    }
	  })

	  carRowTwo.forEach(function(car) {
	    car.draw(context);
	});
	  carRowTwo.forEach(function(car) {
	    car.moveTwo(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead2');
	    }
	  })

	  carRowThree.forEach(function(car) {
	    car.draw(context);
	});
	  carRowThree.forEach(function(car) {
	    car.moveThree(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead3');
	    }
	  })

	  carRowFour.forEach(function(car) {
	    car.draw(context);
	});
	  carRowFour.forEach(function(car) {
	    car.moveFour(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead4');
	    }
	  })

	  carRowFive.forEach(function(car) {
	    car.draw(context);
	});
	  carRowFive.forEach(function(car) {
	    car.moveFive(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead5');
	    }
	  })

	  carRowSix.forEach(function(car) {
	    car.draw(context);
	});
	  carRowSix.forEach(function(car) {
	    car.moveSix(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead6');
	    }
	  })

	  carRowSeven.forEach(function(car) {
	    car.draw(context);
	});
	  carRowSeven.forEach(function(car) {
	    car.moveSeven(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead7');
	    }
	  })

	  carRowEight.forEach(function(car) {
	    car.draw(context);
	});
	  carRowEight.forEach(function(car) {
	    car.moveEight(context);
	    if (frog.x < car.x + car.width &&
	     frog.x + frog.width > car.x &&
	     frog.y < car.y + car.height &&
	     frog.height + frog.y > car.y) {
	      console.log('dead8');
	    }
	  })
	  // frog.moveFrog(canvas, rightPressed, leftPressed, upPressed, downPressed);
	  requestAnimationFrame(gameLoop);
	});


	// setInterval(drawFrog, 10);


/***/ },
/* 1 */
/***/ function(module, exports) {

	

	function Frog(x, y, width, height, canvas){
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.canvas = canvas;
	}

	Frog.prototype.drawFrog = function(context) {
	  context.fillRect(this.x, this.y, this.width, this.height);
	  var img = document.getElementById("frogpicture");
	   context.fillStyle = img;
	   context.fill();
	}

	Frog.prototype.moveRight = function(){
	  if(this.canMoveRight()){
	    this.x +=70;
	  }
	}

	Frog.prototype.canMoveRight = function(){
	  return this.x < this.canvas.width-this.height
	}


	Frog.prototype.moveLeft = function(){
	  if(this.canMoveLeft()){
	    this.x -=70;
	  }
	}

	Frog.prototype.canMoveLeft = function(){
	  return this.x > 0;
	}

	Frog.prototype.moveUp = function(){
	  if(this.canMoveUp()){
	    this.y -= 70;
	  }
	}

	Frog.prototype.canMoveUp = function(){
	  return this.y > 0;
	}

	Frog.prototype.moveDown = function(){
	  if(this.canMoveDown()){
	    this.y += 70;
	  }
	}

	Frog.prototype.canMoveDown = function(){
	  return this.y < this.canvas.height-this.height
	}



	module.exports = Frog;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Index = __webpack_require__(1)

	function Cars (x, y, width, height){
	 this.x = x;
	 this.y = y;
	 this.width = width;
	 this.height = height;
	}

	Cars.prototype.draw = function(context) {
	context.fillRect(this.x, this.y, this.width, this.height);
	return this;
	};

	Cars.prototype.moveOne = function(context) {
	  if (this.x < -100) {
	    this.x = 600;
	  }
	  this.x--;
	}

	Cars.prototype.moveTwo = function(context) {
	  if (this.x > 650) {
	    this.x = -50;
	  }
	  this.x++;
	}

	Cars.prototype.moveThree = function(context) {
	  if (this.x < -70) {
	    this.x = 600;
	  }
	  this.x--;
	}

	Cars.prototype.moveFour = function(context) {
	  if (this.x > 650) {
	    this.x = -50;
	  }
	  this.x++;
	}

	Cars.prototype.moveFive = function(context) {
	  if (this.x < -70) {
	    this.x = 600;
	  }
	  this.x--;
	}

	Cars.prototype.moveSix = function(context) {
	  if (this.x > 650) {
	    this.x = -50;
	  }
	  this.x++;
	}

	Cars.prototype.moveSeven = function(context) {
	  if (this.x < -100) {
	    this.x = 600;
	  }
	  this.x--;
	}

	Cars.prototype.moveEight = function(context) {
	  if (this.x > 650) {
	    this.x = -50;
	  }
	  this.x++;
	}

	//
	// var firstCar = new Cars(50, 50, 10, 10);
	// firstCar.draw();

	// requestAnimationFrame(function gameLoop() {
	//   context.clearRect(0, 0, canvas.width, canvas.height);
	//   drawFrog();
	//   firstCar.draw();
	//   requestAnimationFrame(gameLoop);
	// });

	module.exports = Cars;


/***/ }
/******/ ]);