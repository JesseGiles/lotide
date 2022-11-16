/*
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.

Tips:
You can use for...of loops with strings.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const results = {};

  for (const letters of inputString) {
    if (letters === " ") {
      //do nothing for spaces
    } else if (results[letters]) {
      results[letters] += 1; //if letter count already exists, add one
    } else {
      results[letters] = 1; //if letter not yet counted, start at 1
    }
  }
  return results;
};

console.log(countLetters('LHL'));
const test = countLetters('LHL');
assertEqual(test["L"], 2);
console.log(countLetters("lighthouse in the house"));
const test2 = countLetters("lighthouse in the house");
assertEqual(test2["h"], 4);
console.log(countLetters('Bloodborne is the best Soulsborne'));
const test3 = countLetters('Bloodborne is the best Soulsborne');
assertEqual(test3["o"], 4);