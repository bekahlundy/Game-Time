function Level(){

}

Level.prototype.draw = function(context, updateLevel) {
  context.fillStyle = "white";
  context.font = ('20px Krungthep');
  context.fillText('Level:' + updateLevel, 5, 20);
  return this;
};

module.exports = Level;
