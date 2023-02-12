const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a45e06a75mshb63713c74f09393p127dd6jsn9e963b50220b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function london (handle) {
const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3'
const response = await fetch(url, handle);
const weatherLondon = await response.json();
console.log(weatherLondon.location.name)
console.log(weatherLondon.location.lat)
console.log(weatherLondon.location.lon)

}

london(options)