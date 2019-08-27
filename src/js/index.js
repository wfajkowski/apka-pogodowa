import '../css/style.css';
import CitiesFinder from './CitiesFinder.js';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';


const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');
const search = document.getElementById('search')



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
document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_)
window.onload = load_()
