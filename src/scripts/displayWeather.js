export const displayWeather = async (results) => {
	// UI Selectors
	const city = document.querySelector('#city');
	const image = document.querySelector('img');
	const temperature = document.querySelector('#temperature');
	const summary = document.querySelector('#summary');

	const { cityName, temp, icon, desc } = await results;

	city.innerHTML = cityName;
	image.src = `https://developer.accuweather.com/sites/default/files/${icon < 10 ? '0' + icon : icon}-s.png`;
	temperature.innerHTML = `${temp.Imperial.Value}°F`;
	summary.innerHTML = desc;
};
