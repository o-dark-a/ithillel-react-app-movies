// dropdown section
const wrapper = document.querySelector('.wrapper');
const dropdown = document.createElement('dropdown');

const dropdownInput = document.createElement('input');
dropdownInput.setAttribute('id', 'toggle1');
dropdownInput.setAttribute('type', 'checkbox');
dropdownInput.setAttribute('checked', 'true');

const dropdownLabel= document.createElement('label');
dropdownLabel.classList.add('animate');
dropdownLabel.setAttribute('for', 'toggle1');
dropdownLabel.textContent = 'Weather';

const dropdownList= document.createElement('ul');
dropdownList.classList.add('animate');

dropdown.append(dropdownInput);
dropdown.append(dropdownLabel);
dropdown.append(dropdownList);

wrapper.append(dropdown);

// preloader
const weatherLoadingWrap = document.createElement('div');
weatherLoadingWrap.classList.add('weather-loader');
weatherLoadingWrap.setAttribute('id', 'weather-loader');

const weatherLoading = document.createElement('div');
weatherLoading.classList.add('weather-loader__loading');

const weatherLoadingImg = document.createElement('img');
weatherLoadingImg.setAttribute('src', 'img/loading.gif');
weatherLoadingImg.setAttribute('alt', 'Loading...');

weatherLoadingWrap.append(weatherLoading);
weatherLoading.append(weatherLoadingImg);

wrapper.append(weatherLoadingWrap);

// weather section
const weather = document.createElement('div');
weather.setAttribute('id', 'weather');
weather.classList.add('weather');
weather.classList.add('weather-block--hide');

const weatherHeader = document.createElement('div');
weatherHeader.classList.add('weather__header');

const weatherMain = document.createElement('div');
weatherMain.classList.add('weather__main');

const weatherCity= document.createElement('div');
weatherCity.classList.add('weather__city');

const weatherStatus = document.createElement('div');
weatherStatus.classList.add('weather__status');

const weatherIcon = document.createElement('div');
weatherIcon.classList.add('weather__icon');

const weatherImg = document.createElement('img');
weatherImg.setAttribute('src', 'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png');
weatherImg.setAttribute('alt', 'image');

const weatherTemp= document.createElement('div');
weatherTemp.classList.add('weather__temp');

const weatherFeels = document.createElement('div');
weatherFeels.classList.add('weather__feels-like');

weatherMain.append(weatherCity);
weatherMain.append(weatherStatus);

weatherIcon.append(weatherImg);

weatherHeader.append(weatherMain);
weatherHeader.append(weatherIcon);

weather.append(weatherHeader);
weather.append(weatherTemp);
weather.append(weatherFeels);

wrapper.append(weather);
