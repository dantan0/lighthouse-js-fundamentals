const merge = function(array1, array2) {
  let i = 0;
  let j = 0;
  let result = [];
  // compare and push into new array
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j])
      j++;
    }
  }
  // push the remaining elements of array1 or array2
  if (i < array1.length) {
    for (let index = i; index < array1.length; index++) {
      result.push(array1[index])
    }
  }
  if (j < array2.length) {
    for (let index = j; index < array2.length; index++) {
      result.push(array2[index]);
    }
  }
  return result;
}

// test cases
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);