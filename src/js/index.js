import '../css/style.css';
import { geoFindMe } from './geolocation.js';
import { save_ } from './localStore.js';
import { load_ } from './localStore.js';
import './citiesSearch.js';


const search = document.getElementById('search')


document.querySelector('#find-me').addEventListener('click', geoFindMe);
search.addEventListener('click', save_)
window.onload = load_()
