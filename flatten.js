const flatten = function(array) {
  let newArray = [];

  for (x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      for (y = 0; y < array[x].length; y++) {
        newArray.push(array[x][y])
      }
    } else {
      newArray.push(array[x])
    }
  }

  console.log(newArray);
  return newArray;

}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]