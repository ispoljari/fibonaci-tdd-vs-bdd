const fib = num => {
  if (!Number.isInteger(num)) {
    throw new Error('The argument must be a valid integer!');
  }

  if (num < 0) {
    throw new Error('The argument must be greater than or equal to 0!');
  }

  if (num === 0) {
    return [];
  }

  if (num === 1) {
    return [1];
  }

  const arr = [1,1];

  for(let i=2; i<num; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }

  return arr;
};

module.exports = fib;
