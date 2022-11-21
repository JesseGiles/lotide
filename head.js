const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array) {
    return array[0];
  } else {
    return undefined;
  }
};


module.exports = head;

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head