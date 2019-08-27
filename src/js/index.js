import '../css/style.css';
import CitiesFinder from './CitiesFinder.js';
import '../../res/citiesPL.json';

const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');


function display() {
    finder.getCities(this.value);
}

function getCityId() {
    finder.getCityId(selectedPlace);
}

// temporary function to get selected city id
export function returnCityId(id) {
    console.log(id);
}

input.addEventListener('keyup', display);
input.addEventListener('change', display);
selectedPlace.addEventListener('click', getCityId);