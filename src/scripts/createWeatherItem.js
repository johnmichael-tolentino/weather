import '../styles/createWeatherItem.css';

export const createWeatherItem = ({ cityName, temp, icon, desc }) => {
	const createElements = () => {
		return ['div', 'button', 'h2', 'img', 'section', 'h1', 'h3'].map((elem) => {
			return document.createElement(elem);
		});
	};

	const configureWeatherItem = () => {
		const [div, button, h2, img, section, h1, h3] = createElements();

		// Add attributes.
		div.id = cityName;
		div.className = 'weather-item';
		button.className = 'delete';
		h2.className = 'city-name';
		img.className = 'icon';
		section.className = 'content';
		h1.className = 'temperature';
		h3.className = 'description';

		// Event listener to delete weather item.
		button.addEventListener('click', () => {
			document.querySelector('#weather-display').removeChild(document.querySelector(`#${cityName}`));
		});

		// Insert content.
		button.innerHTML = 'x';
		h2.innerHTML = cityName;
		img.src = `https://developer.accuweather.com/sites/default/files/${icon < 10 ? '0' + icon : icon}-s.png`;
		h1.innerHTML = `${temp.Imperial.Value}°F`;
		h3.innerHTML = desc;

		// Build weather item.
		div.appendChild(button);
		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(section);
		section.appendChild(h1);
		section.appendChild(h3);

		return div;
	};

	return configureWeatherItem();
};
