/*
Let's implement another useful utility function into Lotide. In doing so we will get more hands on experience in implementing and testing higher-order functions which use callbacks.

We will be implementing a function quite similar to Lodash's takeWhile, but isn't present in their library: takeUntil.

It will take in two parameters as well:

-The array to work with
-The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/

const eqArrays = function(array1, array2) {

  if (Array.isArray(array1) === false || Array.isArray(array2) === false) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index in array1) {
    if (array1[index] !== array2[index]) {
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

const takeUntil = function(array, callback) {
  const slicedArray = [];

  for (let values of array) {
    
    if (callback(values) === true) {
      return slicedArray;
    }
    slicedArray.push(values);
  }

  return slicedArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

const data3 = ["This", "is", "a", true, "but", "this", "is", false];
const results3 = takeUntil(data3, x => x === true);
console.log(results3);
assertArrayEqual(results3, [ 'This', 'is', 'a']);

/*
expected outcome

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/