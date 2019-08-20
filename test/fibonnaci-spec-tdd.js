const assert = require('chai').assert;
const fib = require('../index');

suite('TDD tests', function() {
  suite('fibonnaci', function() {
    test('throws error if value of argument not integer', function() {
      assert.throws(fib('Hey, I\'m a string'));
      assert.throws(fib(true));
      assert.throws(fib(null));
    });
  
    test('throws error if value of arg int < 0', function() {
      assert.throws(fib(-1));
    });
  
    test('is array when int >= 0', function() {
      assert.isArray(fib(1));
    });
  
    test('equals [] if value of arg 0', function() {
      assert.equal([], fib(0));
    });
  
    test('equals [1] if value of arg 1', function() {
      assert.equal([1], fib(1));
    });
  
    test('equals [1,1] if value of arg 2', function() {
      assert.equal([1,1], fib(2));
    });
  
    test('equals [1,1,2] if value of arg 3', function() {
      assert.equal([1,1,2], fib(3));
    });
  
    test('equals [1,1,2,3,5,8,13,21,34] if value of arg 9', function() {
      assert.equal([1,1,2,3,5,8,13,21,34], fib(9));
    });
  });
});
