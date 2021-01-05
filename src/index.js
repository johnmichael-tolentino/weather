import './styles/index.css';
import { fetchWeather } from '../src/scripts/fetchWeather';
import { createWeatherItem } from '../src/scripts/createWeatherItem';
import { displayWeather } from '../src/scripts/displayWeather';
import Storage from './scripts/storage';
import { displayError } from './scripts/displayError';

(() => {
	// Callback method to prompt weather query and render.
	const weather = async (location) => {
		const results = await fetchWeather(location);
		if (!results) return;
		const weatherItem = createWeatherItem(results, storage);
		displayWeather(weatherItem);
	};

	// UI Selectors
	const form = document.querySelector('form');
	const location = document.querySelector('#location');

	// Event Listener for weather input
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (!location.value) return displayError('invalid');
		else weather(location.value);
	});

	const storage = new Storage();
	// Validates cities in local storage and renders.
	if (storage.getLocationData() && storage.getLocationData()[0] !== null) {
		const cityList = storage.getLocationData();
		cityList.forEach((city) => weather(city));
	} else storage.setLocationData();
})();
