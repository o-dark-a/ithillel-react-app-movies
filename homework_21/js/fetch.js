function getDefaultCharacters() {
  const randomCharactersId = getRandomNumbers(10, 1, 826).join();
  fetch(`https://rickandmortyapi.com/api/character/${randomCharactersId}`)
  .then((response) => {
    return response.json();
  })
  .then((characters) => {
    for (let ones of characters) {
      let liveStatus = '';
      ones.status === 'Dead' ? liveStatus = 'dead' : liveStatus = ''; 
      createCard(ones.name, liveStatus, ones.species, ones.status, ones.location.name, ones.image);
    }
  });
}

function getRandomNumbers(countNums, fromInclusive, toInclusive) {
  if (countNums <= 0) { return 'Number must be greater than 0'; }
  let randomNumsArray = new Array(countNums).fill(null);

  return randomNumsArray.map((elem) => elem = getRandomIntInclusive(fromInclusive, toInclusive));
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const headSection = document.querySelector('.header');
headSection.addEventListener("change", characterSorting);

function getQueryParameters(event) {
  const parentsForm = event.target.closest('form');
  const siblinngsForm = parentsForm.previousElementSibling ? parentsForm.previousElementSibling : parentsForm.nextElementSibling;
  const siblingsCheckedInput = siblinngsForm.querySelectorAll('input[type="radio"]:checked')[0];
  let parametersString = '?';

  if (event.target.checked) {
    parametersString += `${event.target.name}=${event.target.value}&`;
  }

  if (siblingsCheckedInput) {
    parametersString += `${siblingsCheckedInput.name}=${siblingsCheckedInput.value}&`;
  }

  return parametersString;
}

function characterSorting(event) {
  const queryParameters = getQueryParameters(event);
  fetch(`https://rickandmortyapi.com/api/character/${queryParameters}`)
  .then(response => response.json())
  .then(data => {

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const characters = data.results;

    for (let ones of characters) {
      let liveStatus = '';
      ones.status === 'Dead' ? liveStatus = 'dead' : liveStatus = ''; 
      createCard(ones.name, liveStatus, ones.species, ones.status, ones.location.name, ones.image);
    }

  });
}

getDefaultCharacters();
