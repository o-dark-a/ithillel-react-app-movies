// Task 1

const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    const number = getRandomIntInclusive(1, 6);

    if (number >= 1 && number <= 5) {
      resolve(['Start the game...', number]);
    } else {
      reject('Exit');
    }

  }, 2000);
})

promise
  .then(([massage, number]) => {
    console.log(massage);

    if (number === 1) {
      console.log('Stay here');
    }
    if (number >= 2) {
      console.log(`Go ${number} steps`);
    }

  })
  .catch(error => console.error(error));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Task 2

function goToShop() {
  const productsCount = prompt('How many products have you bought?');
  return Promise.resolve(productsCount)
                .then((res) => res < 4 ? Promise.reject('Too low products') : makeDinner())
                .catch(error => console.error(error));
}

function makeDinner() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Bon Appetit');
    }, 3000);
  }).then((res) => console.log(res));
}

goToShop();
