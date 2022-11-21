// test/headTest.js

const head = require('../head');
const assertEqual = require('../assertEqual');
// TEST CODE
// ...

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1234]), 1234);
assertEqual(head([]), 13);
assertEqual(head([3, 6, 9]), "3");
assertEqual(head([9, 39]), 39);