// Task 1

// Write a function that changes the background color of the last paragraph text in the <body> block,
// as well as a function that swaps the footer and main blocks.

function changeLastParagraphBgColor() {
  const lastParagraph = document.querySelector('body p:last-child');
  lastParagraph.style.backgroundColor = 'red';
}

changeLastParagraphBgColor();

function swappingBlocks() {
  const footerBlock = document.querySelector('#footer');
  const wrapperBlock = document.querySelector('#wrapper');
  wrapperBlock.append(footerBlock);
}

swappingBlocks();

// Task 2

// Write a function that asks the user for permission to add an image (confirm()) and, if he agrees,
// adds the image to the page (the user must set the link to the image himself).

function addImage() {
  if(confirm('Would you like to add some image?')) {

    const defaultImgLink = 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZWx5JTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80';
    const userImgLink = prompt('Insert image link', defaultImgLink);
    const currentImgLink = userImgLink ? userImgLink : defaultImgLink;

    const wrapper = document.querySelector('#wrapper');
    const image = document.createElement('img');
    image.src = currentImgLink;
    image.alt = 'image description';

    wrapper.append(image);
    
  }
}

addImage();

// Task 3

// Ask the user for a number and add <input> tags to the form (before the Register button) equal to that number.

// Requirements for the <input> tag:
//  - each input must contain the 'input-item' class, value = `Input ${index}`;
//  - the last input must have an additional 'margin-zero' class;
//  - create your own class with background-color property and add it to all odd inputs;
//  - clear the value of every third input and give it a placeholder attribute with any text.

function createNewInput() {
  const inputCount = +prompt('How many inputs would you like to add?');
  const isValidCount = inputCount > 0 && Number.isInteger(inputCount);

  if (isValidCount) {
    const form = document.querySelector('form');

    for (let i = inputCount; i > 0; i--) {
      const input = document.createElement('input');
      input.classList.add('input-item');
      input.value = `Input ${i}`;
      form.prepend(input);
    }
  }
}

createNewInput();

// the last input must have an additional 'margin-zero' class
function highlightLastInput() {
  document.querySelector('.input-item:last-of-type').classList.add('margin-zero');
}

highlightLastInput();

// create your own class with background-color property and add it to all odd inputs
function highlightOddInputs() {
  const allInputs = document.querySelectorAll('.input-item');
  for (let i = 0; i < allInputs.length; i++) {
    if((i+1) % 2) {
      allInputs[i].classList.add('odd-inputs');
    }
  }
}

highlightOddInputs();

// clear the value of every third input and give it a placeholder attribute with any text
function clearEveryThirdElem() {
  const allInputs = document.querySelectorAll('.input-item');
  for (let i = 0; i < allInputs.length; i++) {
    if(!((i+1) % 3)) {
      allInputs[i].value = '';
      allInputs[i].placeholder = 'Some text';
    }
  }
}

clearEveryThirdElem();
