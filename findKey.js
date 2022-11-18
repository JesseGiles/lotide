/*
Not too long ago, we implemented a findKeyByValue function in Lotide. It was similar to, but more limited than, findKey from Lodash. Now that we know about callbacks, let's make a more complex version of this in a similar way to what Lodash has.

Again this challenge will help you practice your comfort with crafting higher-order functions that accept a callback.

Copy our assertEqual function into this new file.

Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  let matchingKey;

  for (const keys in obj) {
    let keyname = obj[keys];
        
    if (callback(keyname) === true) {
      matchingKey = keys;
      return matchingKey;
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

let results2 = findKey({
  Ray: "ghostbuster",
  Egon: "ghostbuster",
  Spengler: "ghostbuster",
  Winston: "ghostbuster",
  Janine: "not a ghostbuster"
}, x => x !== "ghostbuster");

assertEqual(results1, "noma");
assertEqual(results2, "Winston");

