/*
Copy your eqObjects function into this new file.

Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

We quickly realize while looking at the assertion messages that they print out objects as [object Object] which is not very descriptive and will not help with our debugging efforts.

As a workaround to this problem, we can modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it.

const inspect = require('util').inspect; // <= add this line
*/

const eqArrays = function(input1, input2) {
  for (let index in input1) {
    if (input1[index] !== input2[index]) {
      return false;
    }
  } return true;
};

const assertArrayEqual = function(input1, input2) {
  let result = eqArrays(input1, input2);
  console.log(result);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
  }
};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }

    } else {
      if (object1[key] !== object2[key]) {
        console.log(false);
      }
    }

  } return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(input1, input2) {
  const inspect = require('util').inspect;

  let result = eqObjects(input1, input2);
  console.log(result);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed:`, inspect(input1), `===`, inspect(input2));
  } else if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed:`, inspect(input1), `!==`, inspect(input2));
  }

};

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };


//assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
//assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
assertObjectsEqual(cd, cd2);

/*
expected output
✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
*/