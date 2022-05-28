// Task 1

// Create a createBuffer() function that creates a local variable text as an empty string and returns a buffer
// function that can be manipulated like this:
// - If a string parameter was passed to the buffer function, this parameter is written to the text variable.
//   Otherwise, print an error to the console.
// - If the buffer function is called without parameters, the value of the text variable is returned.

// Create a variable and store the result of the createBuffer() function in it.
// Demonstrate how the returned buffer function works with and without a parameter.

function createBuffer() {

  let text = '';
  
  return function buffer(str) {
    if (!str) return text;
    return (typeof str === 'string') ? text += str : console.error('Expected string type parameter');
  };

}

let buffer = createBuffer();

buffer("A");
buffer("XYZ");
buffer(23);
console.log(buffer()); // AXYZ
