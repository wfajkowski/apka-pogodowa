import '../css/style.css';
import APIrequest from './APIrequest';

const defaultCity = 'wroclaw';

// Create div for test results
const formDiv = document.createElement('div');
formDiv.classList = 'info-div';
document.querySelector('.container').insertBefore(formDiv, document.querySelector('.wheater'));

const form = document.createElement('form');
formDiv.appendChild(form);
const inputTxt = document.createElement('input');
inputTxt.setAttribute('type', 'text');
form.appendChild(inputTxt);
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
form.appendChild(submitBtn);

const defaultLocation = new APIrequest(defaultCity, "weather");
defaultLocation.displayData();

form.addEventListener('submit', event => {
    event.preventDefault();
    const cityName = inputTxt.value;
    const weather = new APIrequest(cityName, 'weather');
    // const data = weather.makeRequest().then(weather.displayData());
    // const data = weather.displayData();
    // console.log("data", data);
    // const result = data.then(console.log('jest'));
    // console.log("result", result[0]);
    weather.displayData();
});