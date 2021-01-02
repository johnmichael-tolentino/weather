import '../styles/displayWeather.css';

export const displayWeather = (weatherItem) => {
	const weatherDisplay = document.querySelector('#weather-display');
	weatherDisplay.appendChild(weatherItem);
};
