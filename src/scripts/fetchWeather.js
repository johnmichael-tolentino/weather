import axios from 'axios';
import { displayError } from './displayError';

export const fetchWeather = async (city) => {
	if (document.querySelector(`#${city.replace(/\s/g, '')}`)) return displayError('duplicate');

	// Add validate function
	const API_KEY = '32CBtY5ZcJBGfWxjm6IJZbTgom382LhX';

	// Fetch location data.
	const response = await axios.get('https://dataservice.accuweather.com/locations/v1/cities/search', {
		params: {
			apikey: API_KEY,
			q: city,
		},
	});

	if (!response.data.length) return displayError('invalid');

	const { LocalizedName: cityName, Key } = response.data[0];

	// Fetch weather data.
	const { data } = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${Key}`, {
		params: {
			apikey: API_KEY,
		},
	});

	// Destructure necessary data.
	const { Temperature: temp, WeatherIcon: icon, WeatherText: desc } = data[0];

	return { cityName, temp, icon, desc };
};
