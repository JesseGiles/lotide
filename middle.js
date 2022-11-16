/*
It would be nice to make proper use of our brand new assertArraysEqual function to test functions like middle that return arrays. Copy and paste it, along with its accompanying eqArrays function from the appropriate source file.

Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

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

const middle = function(array) {
  let middleNum;
  let middleArray = [];
  
  if (array.length <= 2) {
    console.log(middleArray);
    return middleArray;
  }

  if (array.length % 2 === 0) {
    middleNum = array[Math.floor((array.length - 1) / 2)];
    middleArray.push(middleNum);
    middleNum = array[Math.floor(array.length / 2)];
    middleArray.push(middleNum);
    console.log(middleArray);
  } else {
    middleNum = array[Math.floor((array.length - 1) / 2)];
    middleArray.push(middleNum);
    console.log(middleArray);
  }
  return middleArray;
};



middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
let test1 = [1, 2, 3];
assertArraysEqual(middle(test1), [2]);
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
let test2 = [1, 2, 3, 4];
assertArraysEqual(middle(test2), [3]);
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([5, 10, 15, 20, 25, 30, 35, 40, 45]);
let test3 = [5, 10, 15, 20, 25, 30, 35, 40, 45];
assertArraysEqual(middle(test3), [25]);