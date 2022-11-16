/*
While implementing tail previously we came across another problem: JS doesn't allow us to easily compare arrays. This made the test code for our function more cumbersome.

Let's fix that by first implementing a function that can compare two arrays for a perfect match.

Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//this is a nice shortcut using .every function
/*const eqArrays = function (array1, array2) {
  console.log(`Array 1: `, array1, ` Array 2: `, array2)
  let truthyFalsy = array1.every((v, i) => v === array2[i]);

  return truthyFalsy; */

const eqArrays = function(array1, array2) {
  for (let index in array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  } return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true  < ----  calling 
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false  <---- logging
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => should PASS
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => should FAIL