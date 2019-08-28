import CitiesFinder from './CitiesFinder.js';

const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');
const searchButton = document.getElementById('search');
var val;

function display() {
    finder.getCities(this.value);
}

function getCityId() {
    finder.getCityId(selectedPlace);
}

export function returnCityId(id) {
    console.log(id);
    val = id;
}

function passCityId() {
    console.log(val);
}

input.addEventListener('keyup', display);
input.addEventListener('change', display);
selectedPlace.addEventListener('click', getCityId);
searchButton.addEventListener('click', passCityId);