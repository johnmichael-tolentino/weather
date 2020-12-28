import axios from 'axios';

export const fetchWeather = async (city) => {
	const API_KEY = '32CBtY5ZcJBGfWxjm6IJZbTgom382LhX';

	// Fetch location data.
	const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search', {
		params: {
			apikey: API_KEY,
			q: city,
		},
	});

	const { LocalizedName: cityName, Key } = response.data[0];

	// Fetch weather data.
	const { data } = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${Key}`, {
		params: {
			apikey: API_KEY,
		},
	});

	// Destructure necessary data.
	const { Temperature: temp, WeatherIcon: icon, WeatherText: desc } = data[0];

	return { cityName, temp, icon, desc };
};
