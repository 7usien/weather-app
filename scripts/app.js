const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const updateUI = async (data) => {
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

	card.classList.contains('d-none') ? card.classList.remove('d-none') : false;
};

const updateCity = async (city) => {
	const cityDet = await getCity(city);
	const weather = await getWeather(cityDet.Key);
	return { cityDet, weather };
};
cityForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const cityId = cityForm.city.value.trim().toLowerCase();
	cityForm.reset();
	updateCity(cityId).then((data) => {
		updateUI(data);
	});
});
