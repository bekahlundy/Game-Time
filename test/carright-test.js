const chai = require('chai');
const assert = chai.assert;

const CarRight = require('../lib/carright.js')

describe('carRight', function(){
  context('with default attributes.', function(){
    var carright = new CarRight({});

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
    it('should have a method draw', function(){
      var carright = new CarRight();
      assert.isFunction(carright.draw);
    });
  });
});
