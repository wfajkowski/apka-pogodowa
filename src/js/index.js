import '../css/style.css';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';
import {APIrequest, init, showMeWeather} from './APIrequest';
import './citiesSearch.js';
import { imageChange } from './imageChange.js';
import './graph.js';


const search = document.getElementById('search')
init('metric');


document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_);
window.onload = load_();
window.onload = imageChange();
search.addEventListener('click', showMeWeather.bind(this, 'metric'));
