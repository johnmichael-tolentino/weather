import { fetchWeather } from '../src/scripts/fetchWeather';
import { displayWeather } from '../src/scripts/displayWeather';

const form = document.querySelector('form');
const location = document.querySelector('#location');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const results = fetchWeather(location.value);
	displayWeather(results);
});
