// test/assertArraysEqual.js

const assertArrayEqual = require('../assertArraysEqual');
// TEST CODE
// ...


assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
