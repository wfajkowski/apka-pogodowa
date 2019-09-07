import '../css/style.css';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';
import { init, showMeWeather, changeUnits } from './showMeWeather.js';
import './citiesSearch.js';
import { imageChange } from './imageChange.js';
// import './graph.js';
import { speakToSearch, stopSpeechRecognition } from './speakToSearch';


const search = document.getElementById('search')
init('metric');
const forecastButtons = document.querySelectorAll('.buttons .btn');


document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_);
window.onload = load_();
window.onload = imageChange();
search.addEventListener('click', () => {
    let unitType = document.querySelector('.unit-type.active').dataset.type;
    showMeWeather.bind(this, unitType)();
});

const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('click', speakToSearch);
searchBar.addEventListener('blur', stopSpeechRecognition);
changeUnits();