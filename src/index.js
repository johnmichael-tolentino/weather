import { fetchWeather } from '../src/scripts/fetchWeather';
import { createWeatherItem } from '../src/scripts/createWeatherItem';
import { displayWeather } from '../src/scripts/displayWeather';

const form = document.querySelector('form');
const location = document.querySelector('#location');

const weather = async (e) => {
	e.preventDefault();
	const results = await fetchWeather(location.value);
	const weatherItem = createWeatherItem(results);
	displayWeather(weatherItem);
};

form.addEventListener('submit', weather);
