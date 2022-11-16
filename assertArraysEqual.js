/*
While the Array is great at comparing primitive types (like numbers and strings), we could use another function for asserting that two arrays are equal.

Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.

Warning:
Functions that do not return values and instead print out messages to the console are more difficult to test using assertions. This is because we cannot simply compare their return value to an expected value.

For this reason, we will not be writing assertions (test code) for assertArraysEqual. That said, you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate.
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

assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL

