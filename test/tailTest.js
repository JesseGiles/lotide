// test/tailTest.js
const assert = require('chai').assert;
const tail = require('../tails');
//const assertEqual = require('../assertEqual');
// TEST CODE
// ...

describe("#tail", () => {
  it("returns ['Lighthouse', 'labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("array with one element should return empty array", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("empty array should yield empty array", () => {
    assert.deepEqual(tail([]), []);
  });

});


