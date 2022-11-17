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

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
const mixedbag = ["hockey", 39, "karate", 152, [1, 2, 3]];
const failtest = "this should fail";

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(numbers, nums => nums + nums);
const results3 = map(mixedbag, values => values[1]);
const results4 = map(failtest, string => string);


console.log(results1);
assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);

console.log(results2);
assertArrayEqual(results2, [2, 4, 6, 8, 10]);

console.log(results3);
assertArrayEqual(results3, ["o", 9, "a", 2]);

console.log(results4);
assertArrayEqual(results4, "this should fail");