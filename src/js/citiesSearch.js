import CitiesFinder from './CitiesFinder.js';

const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');
const searchButton = document.getElementById('search');
var val;
var latitude;
var longitude;

function display() {
    finder.getCities(this.value);
}

function setCityId() {
    finder.getCityId(selectedPlace);
}

export function returnCityId(id, lat, lon) {
    console.log(id, lat, lon);
    val = id;
    latitude = lat;
    longitude = lon;
}

function passCityId() {
    console.log(val, latitude, longitude);
}

input.addEventListener('keyup', display);
selectedPlace.addEventListener('click', setCityId, {
    capture: true
});
searchButton.addEventListener('click', passCityId);