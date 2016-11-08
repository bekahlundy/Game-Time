const chai = require('chai');
const assert = chai.assert;

const CarLeft = require('../lib/carleft.js')

describe('carLeft', function(){
  context('with default attributes.', function(){
    var carleft = new CarLeft({});

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
  });
});

// describe('draw', function(){
//   it('should call drawImage on the canvas', function(){
//       var context = stub().of("drawImage");
//       var carleft = new CarLeft({ctx: context});
//       carleft.drawImage();
//       assert.equal(context.drawImage.calls.length, 1);
//   });
//
//   it('should pass the , width, x, y to drawImage', function(){
//       var context = stub().of("drawImage");
//       var carleft = new CarLeft({ctx: context});
//       carleft.drawImage();
//       assert.equal(context.drawImage.calls[0][0], carleft.x);
//       assert.equal(context.drawImage.calls[0][1], carleft.y);
//       assert.equal(context.drawImage.calls[0][2], carleft.height);
//       assert.equal(context.drawImage.calls[0][3], carleft.width);
//       });
//     });
  // });
