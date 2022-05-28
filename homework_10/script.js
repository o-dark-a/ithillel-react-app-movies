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

// Task 2

// Create a signUp() function that accepts userName, password parameters and returns an object with a userName
// property and a signIn() method.
// The signIn() method takes the newPassword parameter and compares its value with the value of password.

// If the passwords match, the method returns the message:
// 'Sign in success for ${userName}', otherwise - 'Password is incorrect'.

// Create a user variable and store the result of calling the signUp() function into it.
// Output the result of the function to the console.

function signUp(userName, password) {
  return {
    userName,
    signIn: (newPassword) => (newPassword === password) ? `Sign in success for ${userName}` : 'Password is incorrect',
  }
}

let user = signUp("billy", "qwerty");
console.log(user.signIn("a")); // Password is incorrect
console.log(user.signIn("qwerty")); // Sign in success for billy
