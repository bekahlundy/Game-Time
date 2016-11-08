var Frog = require('./frog.js')
var carLeft = require('./carleft.js');

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
}

module.exports = CarRight;
