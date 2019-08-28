import '../css/style.css';
import APIrequest from './APIrequest';

const defaultCity = 'wroclaw';

// Create div for test results
const formDiv = document.createElement('div');
formDiv.classList = 'info-div';
document.querySelector('.container').insertBefore(formDiv, document.querySelector('.weather'));

const form = document.createElement('form');
formDiv.appendChild(form);
const inputTxt = document.createElement('input');
inputTxt.setAttribute('type', 'text');
form.appendChild(inputTxt);
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
form.appendChild(submitBtn);

const defaultLocation = new APIrequest(defaultCity, "weather");
const defaultForecastLocation = new APIrequest(defaultCity, "forecast");
defaultLocation.displayData();
defaultForecastLocation.displayData();

form.addEventListener('submit', event => {
    event.preventDefault();
    const cityName = inputTxt.value;
    const weather = new APIrequest(cityName, 'weather');
    const forecastLocation = new APIrequest(cityName, 'forecast');
    weather.displayData();
    forecastLocation.displayData();
    // console.log(forecastLocation.displayData())
});