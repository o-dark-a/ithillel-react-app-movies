// Task 1

// Create a vegetable object with such properties that the following code returns "onions are usually white".

let vegetable = {
  name: 'onion', 
  color: 'white', 
}

const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`);

// Task 2

// Add the following properties to the vegetable object so that "onions are usually round" is displayed in the console.

vegetable.shape = 'round';

const { shape } = vegetable;
console.log(`${name}s are usually ${shape}`);

// Task 3

// Create an array of vegetable objects (each element of the array must have the same structure as the vegetable
// object) so that the following code returns "cucumbers are usually green", "tomatoes are usually red".

const vegetables = [
  {
    name: 'cucumber', 
    color: 'green',
  },
  {
    name: 'tomato', 
    color: 'red',
  },
]

const [cucumber, tomato] = vegetables;
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);
