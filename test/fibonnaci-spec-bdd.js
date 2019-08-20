const { expect } = require('chai');
const fib = require('../index');

describe('BDD tests', function() {
  describe('fibonnaci', function() {
    it('should throw an error when given a string', function() {
      expect(() => fib('Hey, I\'m a string')).to.throw('The argument must be a valid integer!');
    });

    it('should throw an error when given a boolean', function() {
      expect(() => fib(true)).to.throw('The argument must be a valid integer!');
    });

    it('should throw an error when given a null', function() {
      expect(() => fib(null)).to.throw('The argument must be a valid integer!');
    });

    it('should throw an error when given a value less than 0', function() {
      expect(() => fib(-1)).to.throw('The argument must be greater than or equal to 0!');
    });

    it('should return an array when given a value greater than or equal to 0', function() {
      expect(fib(0)).to.be.instanceOf(Array);
      expect(fib(1)).to.be.instanceOf(Array);
    });

    it('should return [] when given a value of 0', function() {
      expect(fib(0)).to.deep.equal([]);
    });

    it('should return [1] when given a value of 1', function() {
      expect(fib(1)).to.deep.equal([1]);
    });

    it('should return [1,1] when given a value of 1', function() {
      expect(fib(2)).to.deep.equal([1,1]);
    });

    it('should return [1,1,2] when given a value of 1', function() {
      expect(fib(3)).to.deep.equal([1,1,2]);
    });

    it('should return [1,1,2,3,5,8,13,21,34] when given a value of 9', function() {
      expect(fib(9)).to.deep.equal([1,1,2,3,5,8,13,21,34]);
    });
  });
});