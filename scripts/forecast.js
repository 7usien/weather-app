const key = 'GfeZAxWPclJrr1nZcvKW4nyTvDMp7KUi';

// GET CITY INFO >> KEY
const getCity = async (city) => {
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;
	const response = await fetch(base + query);

	if (response.status === 200) {
		let data = await response.json();

		return data[0];
	} else {
		console.log('error fetching city data > getCity');
	}

	// console.log(data);
};

/// GET WEATHER INFO
const getWeather = async (id) => {
	const base = `http://dataservice.accuweather.com/currentconditions/v1/`;

	const query = `${id}?apikey=${key}`;
	const response = await fetch(base + query);
	if (response.status === 200) {
		const data = await response.json();
		return data[0];
	} else {
		console.log('error fetching weather data > getWeather');
	}
};
