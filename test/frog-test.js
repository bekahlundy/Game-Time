const chai = require('chai');
const assert = chai.assert;

const Frog = require('../lib/frog.js')

describe('Frog', function(){
  context('with default attributes.', function(){
    var frog = new Frog({});

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

    describe('moveRight', function(){
      var frog = new Frog({});

      it('should increment the dingus by 1', function(){
        assert.equal(dingus.x, 0);
        dingus.scoot();
        assert.equal(dingus.x, 57);
      });
    });
