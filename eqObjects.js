/*
While working more with objects recently, we've created functions that return objects. When writing out assertions to test the return value of these functions, we quickly realized that our assertEqual can't be used directly. assertEqual can really only be used for checking primitive return types.

You may also recall that we had run into a similar problem with comparing array data. To solve this we implemented eqArrays and then subsequently implemented assertArraysEqual into our Lotide project.

It's time to do the same for objects now, starting with eqObjects. This function implementation will require us to further practice problem solving through object key iteration again. Fun times!
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }

    } else {
      if (object1[key] !== object2[key]) {
        console.log(false);
      }
    }

  } return true;

};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(`test1: eqObjects(ab, ba) => true`);
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
console.log(`test2: eqObjects(ab, abc) => false`);
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(`test3: eqObjects(cd, dc) => true`);
console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(`test4: eqObjects(cd, cd2) => false`);
console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);
