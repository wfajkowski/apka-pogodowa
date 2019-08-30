import '../css/style.css';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';
import {APIrequest, init, showMeWeather} from './APIrequest';
import './citiesSearch.js';
import { imageChange } from './imageChange.js';


const search = document.getElementById('search')
init();


document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_);
window.onload = load_();
setInterval(imageChange(), 1000);
search.addEventListener('click', showMeWeather);