import '../css/style.css';
import {APIrequest, init} from './APIrequest';


// // Create div for test results
const inputTxt = document.querySelector('input');
const form = document.querySelector('form');
init();

form.addEventListener('submit', event => {
    event.preventDefault();
    const cityName = inputTxt.value;
    const weather = new APIrequest(cityName, 'weather');
    const forecastLocation = new APIrequest(cityName, 'forecast');
    weather.displayData();
    forecastLocation.displayData();
    // console.log(forecastLocation.displayData())
});