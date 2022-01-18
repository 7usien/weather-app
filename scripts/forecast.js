const key = '3NYrsGmRCkO8Y8OBTdAtJMMAqB5zDr5A';

class ForeCast {
	constructor(key, base, baseURI) {
		this.key = '3NYrsGmRCkO8Y8OBTdAtJMMAqB5zDr5A';
		this.base =
			'https://dataservice.accuweather.com/locations/v1/cities/search';
		this.baseURI = `https://dataservice.accuweather.com/currentconditions/v1/`;
	}
	async getCity(city) {
		const query = `?apikey=${this.key}&q=${city}`;
		const response = await fetch(this.base + query);

		if (response.status === 200) {
			let data = await response.json();

			return data[0];
		} else {
			console.log('error fetching city data > getCity');
		}
	}
	async getWeather(id) {
		const query = `${id}?apikey=${this.key}`;
		const response = await fetch(this.baseURI + query);
		if (response.status === 200) {
			const data = await response.json();
			return data[0];
		} else {
			console.log('error fetching weather data > getWeather');
		}
	}

	async updateCity(city) {
		const cityDet = await forecast.getCity(city);
		const weather = await forecast.getWeather(cityDet.Key);
		console.log(cityDet);
		return { cityDet, weather };
	}

	async updateUI(data) {
		// const cityDet = data.cityDet;
		// const weather = data.weather;
		const { cityDet, weather } = data;

		details.innerHTML = `
   <h5 class="my-3">${cityDet.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>°C</span>
                </div>

	`;

		icon.setAttribute('src', `icons/${weather.WeatherIcon}.svg`);

		weather.IsDayTime
			? time.setAttribute('src', 'img/day.svg')
			: time.setAttribute('src', 'img/night.svg');

		card.classList.contains('d-none')
			? card.classList.remove('d-none')
			: false;
	}
}

// GET CITY INFO >> KEY
