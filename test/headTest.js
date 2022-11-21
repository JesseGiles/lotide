// test/headTest.js
const assert = require('chai').assert;
const head = require('../head');

// TEST CODE
// ...

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });

  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it("returns 1234 for [1234]", () => {
    assert.strictEqual(head([1234]), 1234); 
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

  it("returns failed for head([3, 6, 9], '3')" , () => {
    assert.strictEqual(head([3, 6, 9]), '3'); 
  });

  it ("returns failed for head([9, 39], 39)" , () => {
    assert.strictEqual(head([9, 39]), 39); 
  });

});

