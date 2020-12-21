import axios from 'axios';

export const fetchWeather = async (city) => {
	const KEY = '32CBtY5ZcJBGfWxjm6IJZbTgom382LhX';

	const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search', {
		params: {
			apikey: KEY,
			q: city,
		},
	});

	const { Key } = response.data[0];

	const { data } = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${Key}`, {
		params: {
			apikey: KEY,
		},
	});

	return data;
};
