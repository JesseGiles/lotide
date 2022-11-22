// test/countOnlyTest.js
const assert = require('chai').assert;
const countOnly = require('../countOnly');

// TEST CODE
// ...

describe("#countOnly", () => {
  it("returns amount of times `Jason` appears in list of names", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true}).Jason, 1);
  });

   it("returns amount of times `Karima` appears in list of names", () => {
     assert.strictEqual(countOnly(firstNames, { "Karima": true}).Karima, undefined);
   });

   it("returns amount of times `Jason` appears in list of names", () => {
    assert.strictEqual(countOnly(firstNames, { "Fang": true}).Fang, 2);
  });

  it("returns amount of times `Agouhanna` appears in list of names", () => {
    assert.strictEqual(countOnly(firstNames, { "Agouhanna": false}).Agouhanna, undefined);
  });

  it("returns amount of times `Jesse` appears in list of names", () => {
    assert.strictEqual(countOnly(firstNames, { "Jesse": true}).Jesse, 4);
  });

});

const firstNames = [
  "Karl",
  "Jesse",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Jesse",
  "Jesse",
  "Jesse"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
