import '../css/style.css';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';
import {APIrequest, init} from './APIrequest';
import './citiesSearch.js';


const search = document.getElementById('search')
const inputTxt = document.querySelector('input');
const form = document.querySelector('form');
init();


document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_)
window.onload = load_()

form.addEventListener('submit', event => {
    event.preventDefault();
    const cityName = inputTxt.value;
    const weather = new APIrequest(cityName, 'weather');
    const forecastLocation = new APIrequest(cityName, 'forecast');
    weather.displayData();
    forecastLocation.displayData();
    // console.log(forecastLocation.displayData())
});