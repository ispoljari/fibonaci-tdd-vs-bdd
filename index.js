const fib = num => {
  if (!Number.isInteger(num)) {
    throw new Error('The argument must be a valid integer!');
  }

  return;
};

module.exports = fib;
