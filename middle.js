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

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  let middleNum;
  let middleArray = [];
  
  if (array.length <= 2) {
    return middleArray;
  }

  if (array.length % 2 === 0) {
    middleNum = array[Math.floor((array.length - 1) / 2)];
    middleArray.push(middleNum);
    middleNum = array[Math.floor(array.length / 2)];
    middleArray.push(middleNum);
  } else {
    middleNum = array[Math.floor((array.length - 1) / 2)];
    middleArray.push(middleNum);
  }
  return middleArray;
};

module.exports = middle;

