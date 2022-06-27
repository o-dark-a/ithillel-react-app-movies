// Task
// Create 3 variables with the following values:

let string1 = "Aquamarine Black Blue Brown Chocolate";
let string2 = "Green Lime Olive Orange Purple";
let string3 = "Red Tomato Violet White Yellow";

// a) Create a joinColor() function that combines all 3 strings into one.
// The function nust work with any number of input strings.

function joinColor(...strings) {
  let resultStr = '';

  for (let str of strings) {
    resultStr = resultStr.concat(' ', str).trim();
  }

  return resultStr;
}

let colors = joinColor(string1, string2, string3);
console.log(colors); // Aquamarine Black Blue Brown Chocolate Green Lime Olive Orange Purple Red Tomato Violet White Yellow

// b)
// Create an indexColor() function that returns the index of the first occurrence of an input string in a string.
// The function takes two parameters:
//   - the term in which the search is performed (for example colors);
//   - term, the index of which must be found

function indexColor(currentStr, searchStr) {
  return currentStr.indexOf(searchStr);
}

let greenIndex = indexColor(colors, 'Green');
console.log(greenIndex); // 38

// c)
// Create a function isColorIncludes(), which checks whether such a color is in the specified string or not.
// Note that the function must work with any case.

function isColorIncludes(currentStr, searchTerm) {
  return currentStr.toLowerCase().includes(searchTerm.toLowerCase());
}

console.log(isColorIncludes(colors, 'Black')); // true
console.log(isColorIncludes(colors, 'BlAcK')); // true
console.log(isColorIncludes(colors, 'Lilac')); // false

// d)
// Create a replaceColor() function to find a string in a given string and replace both with a different one.

function replaceColor(currentStr, searchTerm, replaceTerm) {
  return currentStr.replace(searchTerm, replaceTerm);
}

let result = replaceColor(string2, 'Olive', 'Grey');
console.log(result); // "Green Lime Grey Orange Purple "

// e)
// Create a splitColors (colors, numbers) function that breaks the input string into individual words
//and returns only those words that are at least the number that is passed as the second argument to the function.

function splitColors(string, num) {
  return string.split(' ').filter((word) => word.length > num).join(' ');
}

let filteredColors = splitColors(colors, 6);
console.log(filteredColors); // "Aquamarine Chocolate"

// f)
// Create a calculateSpaces() function that counts the number of spaces in a string.

function calculateSpaces(str) {
  return str.split(' ').length - 1;
}

let count = calculateSpaces(string3);
console.log(count); // 4
