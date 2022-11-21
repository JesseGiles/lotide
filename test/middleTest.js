// test/middle.js

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// TEST CODE
// ...

assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([5, 10, 15, 20, 25, 30, 35, 40, 45]), [25]);