// Task 1

// Write a fillArray function that creates an array and fills it with the specified value.where 3 is the length
// of the array, and 'qwerty' is the value of each element of the array, where 3 is the length of the array,
// and 'qwerty' is the value of each element of the array

function fillArray(arrayLength, arrayElemValue) {

  let newArray = new Array(arrayLength).fill(null);
  newArray.forEach((item, i, arr) => arr[i] = arrayElemValue);

  return newArray;

}

let array1 = fillArray(3, 'qwerty');
let array2 = fillArray(6, 9);
console.log(array1); // ['qwerty', 'qwerty', 'qwerty']
console.log(array2); // [9, 9, 9, 9, 9, 9]
