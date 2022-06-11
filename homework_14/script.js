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
