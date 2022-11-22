/*
This challenge is similar to the countindexnum activity and allows us to spend some more time solving problems with objects.

We'll implement a new function indexnumPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each indexnum, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

example output for "lighthouse in the house":
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

// const eqArrays = function(input1, input2) {
//   for (let index in input1) {
//     if (input1[index] !== input2[index]) {
//       return false;
//     }
//   } return true;
// };

// const assertArraysEqual = function(input1, input2) {
//   let result = eqArrays(input1, input2);
//   console.log(result);
//   if (result === true) {
//     console.log(`✅✅✅ Assertion Passed: ${input1} === ${input2}`);
//   } else if (result === false) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${input1} !== ${input2}`);
//   }
// };

const indexnumPositions = function(sentence) {
  const results = {};
      
  for (let indexnum in sentence) {
    indexnum = Number(indexnum);

    if (sentence[indexnum] === " ") {
      //do nothing for spaces
    } else if (results[sentence[indexnum]]) { //if already key for letter
      results[sentence[indexnum]].push(indexnum); //push i# in that keys array
    } else {
      results[sentence[indexnum]] = [indexnum]; //add key/value pair to obj
    }
  }

  return results;

};

module.exports = indexnumPositions;
    
