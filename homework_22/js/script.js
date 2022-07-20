"use strict";
const url = `http://api.weatherstack.com/current`;
const accessKey = localStorage.getItem('accessKey');

const cities = [
  'Zaporozhye',
  'Dnepropetrovsk',
  'Kiev',
  'Leamington Spa',
  'London',
]

function creatCitiesList(cities) {
  const defaultCities = [...cities];

  for (let city of defaultCities) {
    const dropdownListItem = document.createElement('li');
    dropdownListItem.classList.add('animate');
    dropdownListItem.textContent = city;
  
    dropdownList.append(dropdownListItem);
  }

  const firstListItem = document.querySelector('li.animate');
  firstListItem.classList.add('selected');
 
}

creatCitiesList(cities);

function addSeletedClass(e) {
  e.target.classList.toggle('selected');

	let siblings = [];
	let sibling = e.target.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e.target) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
  
  for (let sibling of siblings) {
    sibling.classList.remove('selected');
  }

}

dropdownList.addEventListener('click', addSeletedClass);

dropdownList.addEventListener('click', function(e) {
  getCityWeatherData(e.target.textContent);
});

function getCityWeatherData(city) {
  fetch(`${url}?access_key=${accessKey}&query=${city}`)
  .then(res => res.json())
  .then(res => ({
      city: res.location.name,
      weatherDescr: res.current.weather_descriptions[0],
      temperature: res.current.temperature,
      feelslike: res.current.feelslike,
    })
  )
  .then(res => {
    let weatherBlock = document.querySelector('.weather');
    let weatherPreloader= document.querySelector('.weather-loader');
    weatherBlock.classList.remove('weather-block--hide');
    weatherPreloader.classList.add('weather-block--hide');

    let weatherCity = document.querySelector('.weather__city');
    let weatherStatus = document.querySelector('.weather__status');
    let weatherTemp = document.querySelector('.weather__temp');
    let weatherFeelsLike = document.querySelector('.weather__feels-like');

    weatherCity.textContent = res.city;
    weatherStatus.textContent = res.weatherDescr;
    weatherTemp.textContent = res.temperature;
    weatherFeelsLike.textContent = `Feels like: ${res.feelslike}`;
  });
}

getCityWeatherData(cities[0]);
