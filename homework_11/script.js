// Task 1

// 1.1. Add two new objects to the array (the keys are the same, but think up the values yourself).

employees.push(
  {
    id: 12,
    name: 'Alan',
    surname: 'Draffe',
    salary: 3400,
    workExperience: 7,
    isPrivileges: true,
    gender: 'male',
  },
  {
    id: 13,
    name: 'Sally',
    surname: 'Milton',
    salary: 200,
    workExperience: 2,
    isPrivileges: false,
    gender: 'female',
  }
)

// 1.2. Display an array of female employees with less than 10 months' experience.

// inexperiencedWomen - lol :)
const inexperiencedWomen = employees.filter(employe => employe.gender === 'female' && employe.workExperience < 10);

console.log(inexperiencedWomen);

// 1.3. Display in the console the object of the employee, whose id = 4.

const fourthEmploye = employees.find(employe => employe.id === 4);

console.log(fourthEmploye);

// 1.4. Display an array of employee surnames in the console.

const employeeSurnames = employees.map(employe => employe.surname);

console.log(employeeSurnames);

// Task 2

// Create an array of frameworks with values: 'AngularJS', 'jQuery'

let frameworks = ['AngularJS', 'jQuery'];

// a)  add 'Backbone.js' to the beginning of the array

frameworks.unshift('Backbone.js');
console.log(frameworks);

// b)  add 'ReactJS' and 'Vue.js' to the end of the array

frameworks.push('ReactJS', 'Vue.js');
console.log(frameworks);

// c)  add a 'CommonJS' value to the array as the second element of the array

frameworks.splice(1, 0, 'CommonJS');
console.log(frameworks);

// d)  find and remove the value of 'jQuery' from the array (you need to find the index of the array element)
//     and display it in the console with the words "This is superfluous".

const indexUnnecessaryElem = frameworks.indexOf('jQuery');
frameworks.splice(indexUnnecessaryElem, 1);

console.log(frameworks);

// Task 3

// Create a removeNegativeElements function, which removes all negative numbers from the input array.

function removeNegativeElements(array) {
  return array.filter(elem => typeof elem === 'string' || elem >= 0 || Number.isNaN(elem));
}

console.log(removeNegativeElements([-9, 2, 3, 0, -28, 'value'])); // [2, 3, 0, 'value'];
console.log(removeNegativeElements([-9, -21, -12])); // []
console.log(removeNegativeElements(['-102', 102])); // ['-102', 102]
console.log(removeNegativeElements([NaN, 45, -5, null])); // [NaN, 45, null]

// Task 4

// Create a getStringElements function that returns an input array with only string values.

function getStringElements(array) {
  return array.filter(elem => typeof elem === 'string');
}

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
console.log(getStringElements(arr)); // ["red", "green", "web"]

// Task 5

// Write a flatArray function that turns an array within an array into a single array.

function flatArray(array) {
  return array.reduce((previousValue, currentValue) => [...previousValue, ...currentValue]);
}

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(flatArray(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Task 6

// Create a function myMap that takes an array as an argument and a function that specifies
// how that array should be modified.

function myMap(arr, modifyingFn) {
  return arr.map(elem => modifyingFn(elem));
}

function increaseElement (element) {
  return element * 2;
}

console.log(myMap([1, 2, 3, 4], increaseElement)); // [2, 4, 6, 8];
