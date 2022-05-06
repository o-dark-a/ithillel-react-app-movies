// Task 1

// Write a program that asks the user for his name and displays a text greeting in the console.
// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you

const userName = prompt('What\'s your name?');

// 1st option
for (let i = 0; i < 4; i++) {

  i === 2 ? console.log(`Happy birthday, dear ${userName}`) : console.log('Happy birthday to you');

  // if (i !== 2) {
  //   console.log('Happy birthday to you');
  // } else {
  //   console.log(`Happy birthday, dear ${userName}`);
  // }
  
}

// 2nd option
let i = 0;
while (i <= 3) {
  console.log(`Happy birthday${ i !== 2 ? ' to you' : `, dear ${userName}`}`);
  i++;
}


