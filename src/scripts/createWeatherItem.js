import '../styles/createWeatherItem.css';

export const createWeatherItem = ({ cityName, temp, icon, desc }) => {
	const createElements = () => {
		return ['div', 'h2', 'img', 'section', 'h1', 'h3'].map((elem) => {
			return document.createElement(elem);
		});
	};

	const configureWeatherItem = () => {
		const [div, h2, img, section, h1, h3] = createElements();

		// Add attributes.
		div.id = cityName;
		div.className = 'weather-item';
		h2.className = 'city-name';
		img.className = 'icon';
		section.className = 'content';
		h1.className = 'temperature';
		h3.className = 'description';

		// Insert content.
		h2.innerHTML = cityName;
		img.src = `https://developer.accuweather.com/sites/default/files/${icon < 10 ? '0' + icon : icon}-s.png`;
		h1.innerHTML = `${temp.Imperial.Value}°F`;
		h3.innerHTML = desc;

		// Build weather item.
		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(section);
		section.appendChild(h1);
		section.appendChild(h3);

		return div;
	};

	return configureWeatherItem();
};
