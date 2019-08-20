const assert = require('chai').assert;
const fib = require('../index');

suite('TDD tests', function() {
  suite('fibonnaci', function() {
    test('throws error if value of argument string', function() {
      assert.throws(() => fib('Hey, I\'m a string'), Error, 'The argument must be a valid integer!');
    });

    test('throws error if value of argument boolean', function() {
      assert.throws(() => fib(true), Error, 'The argument must be a valid integer!');
    });

    test('throws error if value of argument null', function() {
      assert.throws(() => fib(null), Error, 'The argument must be a valid integer!');
    });
  
    test('throws error if value of arg int < 0', function() {
      assert.throws(() => fib(-1), Error, 'The argument must be greater than or equal to 0!');
    });
  
    test('is array when int >= 0', function() {
      assert.isArray(fib(0));
      assert.isArray(fib(1));
    });
  
    test('equals [] if value of arg 0', function() {
      assert.deepEqual(fib(0), []);
    });
  
    test('equals [1] if value of arg 1', function() {
      assert.deepEqual(fib(1), [1]);
    });
  
    test('equals [1,1] if value of arg 2', function() {
      assert.deepEqual(fib(2), [1,1]);
    });
  
    test('equals [1,1,2] if value of arg 3', function() {
      assert.deepEqual(fib(3), [1,1,2]);
    });
  
    test('equals [1,1,2,3,5,8,13,21,34] if value of arg 9', function() {
      assert.deepEqual(fib(9), [1,1,2,3,5,8,13,21,34]);
    });
  });
});
