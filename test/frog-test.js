const chai = require('chai');
const assert = chai.assert;

const Frog = require('../lib/frog.js')

describe('frog', function(){
  context('with default attributes.', function(){
    var frog = new Frog();

    it('should assign an x coordinate', function() {
      assert.equal(this.x);
    });

    it('should assign a y coordinate', function() {
      assert.equal(this.y);
    });

    it('should assign a height', function(){
      assert.equal(this.height);
    });

    it('should assign a width', function(){
      assert.equal(this.width);
    });
    it('should have a method moveRight', function(){
      var frog = new Frog();
      assert.isFunction(frog.moveRight);
    });
    it('should have a method canMoveRight', function(){
      var frog = new Frog();
      assert.isFunction(frog.canMoveRight);
    });
    it('should have a method moveLeft', function(){
      var frog = new Frog();
      assert.isFunction(frog.moveLeft);
    });
    it('should have a method canMoveLeft', function(){
      var frog = new Frog();
      assert.isFunction(frog.canMoveLeft);
    });
    it('should have a mehod moveUp', function(){
      var frog = new Frog();
      assert.isFunction(frog.moveUp);
    });
    it('shoudld have a method canMoveUp', function(){
      var frog = new Frog();
      assert.isFunction(frog.canMoveUp);
    });
    it('should have a method moveDown', function(){
      var frog = new Frog();
      assert.isFunction(frog.moveDown);
    });
    it('should have a method canMoveDown', function(){
      var frog = new Frog();
      assert.isFunction(frog.canMoveDown);
    })
  });
});



// it('moveright', function() {
//   var frog = new Frog({});
//
//   it('should increment the frog by 30', function() {
//     assert.equal(frog.x, 232.5 );
//     frog.moveRight();
//     assert.equal(frog.x, 262.5);
//   });
// });
