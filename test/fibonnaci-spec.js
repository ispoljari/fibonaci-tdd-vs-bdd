const assert = require('chai').assert;

// define unit tests

// should pass

// 1. equals error if value of argument not integer
// 2. equals error if value of arg int < 0
// 3. equals [] if value of arg 0
// 4. equals [1] if value of arg 1
// 5. equals [1,1] if value of arg 2
// 6. equals [1,1,2] if value of arg 3
// 7. equals [1,1,2,3,5,8,13,21,34] if value of arg 9