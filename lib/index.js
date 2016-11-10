$(function() {
    $('#myCanvas').hide();
    $('#finishScreen').hide();
    $('#splashScreen').show();
    startGameScreen();
});

function startGameScreen() {
  playIntro();
  $('.start-btn').on('click', function() {
    $('#splashScreen').hide();
    $('#myCanvas').show();
    playMain();
});
}

function endGameScreen() {
  playDead();
  $('#myCanvas').hide();
  $('#splashScreen').hide();
  $('#finishScreen').show();
  clickTryAgain();
  clickHome();
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


var Frog = require('./frog.js');
var CarLeft = require('./carleft.js');
var CarRight = require('./carright.js');
var Score = require('./score.js');
var FinishLine = require('./finish.js');
var Audio = require('./audio.js');

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var score = new Score();
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
    incrementSpeeds();
    sendToFrontReset();
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
});
