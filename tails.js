const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array) {
    return array.slice(1); //return all elements of array starting from index 1
  } else {
    return undefined;
  }
};

module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back 2 elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["yo yo", "lighthouse", "labs"];
// tail(words);
// assertEqual(words.length, 3); // original array should still have 3 elements

// assertEqual(tail([5]), 5); // array with one element should return empty array
// console.log(tail([5]), 5); // confirm empty array returned
// assertEqual(tail([]), 5); // empty array should yield empty array
// console.log(tail([]), 5); // confirm empty array returned

