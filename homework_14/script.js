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
