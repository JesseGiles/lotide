/*
Often times we need to filter our data by removing some unwanted items, so that we can focus on the "good stuff" that we need. An example of this is all the candy kids get while trick-or-treating for Halloween. Many of these kids create a separate pile of candy which doesn't include all the stuff that they don't like (I hated getting Dubble Bubble as a kid!)

It's for tasks like this that our function without can come in handy.

Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/

const eqArrays = function(input1, input2) {
  for (let index in input1) {
    if (input1[index] !== input2[index]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(input1, input2) {
  let result = eqArrays(input1, input2);
  console.log(result);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
  } else if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
  }
};

const without = function(source, itemsToRemove) {
  let finalArray = [];

  source.forEach(function(value) {
    if (itemsToRemove.indexOf(value) === - 1) {
      finalArray.push(value);
    }
  });
  
  console.log(`final array: `, finalArray);
};

///diff solution: 
/*
const without = function(source, itemsToRemove) {
  const results = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  }
  return results;
}
*/ 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);