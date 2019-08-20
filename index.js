const fib = num => {
  if (!Number.isInteger(num)) {
    throw new Error('The argument must be a valid integer!');
  }

  if (num < 0) {
    throw new Error('The argument must be greater than or equal to 0!');
  }

  return [];
};

module.exports = fib;
