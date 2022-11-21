// test/middle.js

const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE
// ...

describe("#middle", () => {
  it("returns empty array if there are < 2 items in the array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the middle element on an array with odd # of values", () => {
    assert.deepEqual(middle([5, 10, 15, 20, 25, 30, 35, 40, 45]), [25]);
  });

  it("should return 2 middle elements on an array with even # of values", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});
