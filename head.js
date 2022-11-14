const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array) {
  return array[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1234]), 1234);
assertEqual(head([]), 13);
assertEqual(head([3, 6, 9]), "3");
assertEqual(head([9, 39]), 39);

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head