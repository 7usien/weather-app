const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const forecast = new ForeCast();

cityForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const cityId = cityForm.city.value.trim().toLowerCase();
	// add city to local stroage
	localStorage.setItem('city', cityId);
	cityForm.reset();
	forecast.updateCity(cityId).then((data) => {
		forecast.updateUI(data);
	});
});

// CHECK LOCALSTRORAGE
if (localStorage.getItem('city')) {
	let cityId = localStorage.getItem('city');
	forecast.updateCity(cityId).then((data) => {
		forecast.updateUI(data);
	});
}
