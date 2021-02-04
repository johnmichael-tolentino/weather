import '../styles/displayWeather.css';

// Helper function that adds created weather item to weather-display container.
export const displayWeather = (weatherItem) => {
	const weatherDisplay = document.querySelector('#weather-display');
	weatherDisplay.appendChild(weatherItem);
};
