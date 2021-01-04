// Array of city data persisted to local storage.
export default class Storage {
	constructor() {
		this.cities = [];
	}

	getLocationData() {
		return JSON.parse(localStorage.getItem('city-name'));
	}

	setLocationData(cityName) {
		if (cityName) this.cities = [...this.cities, cityName];
		localStorage.setItem('city-name', JSON.stringify(this.cities));
	}

	removeLocationData(cityName) {
		let city = this.cities.indexOf(cityName);
		this.cities.splice(city, 1);
		this.setLocationData();
	}
}
