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

// Task 2

// Write a reverseArray function that flips the value of the array back and forth.

function reverseArray(arr) {

  let newArr = [];

  for (let elem of arr) {
    newArr.unshift(elem);
  }

  return newArr;

}

let array = ['My', 'life', '-', 'my', 'rules'];
let result = reverseArray(array);
console.log(result); // ['rules', 'my', '-', 'life', 'My'];


// Task 3

// Write a filterArray function that clears the array of unwanted values (false, undefined, '', 0, null, NaN).

{
  function filterArray() {
    let passedArgs = arguments[0];
    return passedArgs.filter(elem => elem);
  }
  
  let array = [0, 1, 2, null, undefined, 'qwerty', false, NaN];
  let result = filterArray(array);
  console.log(result); // [1,2, 'qwerty'];
}

// Task 4

// Write a spliceFour function that removes the 4th element of the array and replaces it with the string 'JavaScript'.

{
  function spliceFour(arr) {
    arr.splice(3, 1, 'JavaScript');
    return arr;
  }
  
  let array = [1, 2, 3, 4, 5];
  let result = spliceFour(array);
  console.log(result); // [1, 2, 3, 'JavaScript', 5];
}

// Task 5

// Write a joinArray function that converts an array into a string by joining elements with a specified character.

{
  function joinArray(array, symbol) {
    return array.join(symbol);
  }

  let array = [1, 2, 3, 4, 5];
  let result = joinArray(array, '%');
  console.log(result); // 1%2%3%4%5
}

// Task 6

// Write a joinStr function that returns a string that is formed from the concatenation of all strings
// that are passed as arguments to the function through a comma.

{

  function joinStr(...arr) {
    return arr.filter(elem => typeof elem === 'string').toString();
  }

  let string1 = joinStr(0);
  console.log(string1); // ''
  let string2 = joinStr(1,'hello',3, 'world');
  console.log(string2); // 'hello,world'
  let string3 = joinStr('g','o', 0, '0', null, 'd', {});
  console.log(string3); // 'g,o,0,d'
}
