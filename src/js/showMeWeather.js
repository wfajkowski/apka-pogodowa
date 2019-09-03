import {moment, APIrequest} from './APIrequest';
import {drawChart} from './drawChart';
// Setting default city and fetch data for it
export const init = async (unit) => {
    let defaultCity = 'wroclaw';
    // Set city from Local Storage as default (if this is saved)
    if (localStorage.getItem("defaultCity")) {
        defaultCity = localStorage.getItem("defaultCity").toLowerCase().replace(/"/g, "");
        let currentCity = defaultCity.slice(0, 1).toUpperCase() + defaultCity.slice(1);
        
        document.querySelector('.current-city').textContent = currentCity;
        console.log('Aktualne miasto:', currentCity);
    }

    const defaultLocation = new APIrequest(defaultCity, 'weather', unit);
    const defaultForecastLocation = new APIrequest(defaultCity, 'forecast', unit);
    defaultLocation.displayData();
    await defaultForecastLocation.displayData();
    drawChart();
    clock();
}

// Show weather data for newly chosen city
export const showMeWeather = async (unit) => {
    const searchBar = document.querySelector('#search-bar');
    let cityName = searchBar.value || document.querySelector('.current-city').textContent;
    console.log(searchBar.value);
    const weather = new APIrequest(cityName, 'weather', unit);
    const forecastLocation = new APIrequest(cityName, 'forecast', unit);
    weather.displayData();
    await forecastLocation.displayData();
    let currentCity = cityName.slice(0, 1).toUpperCase() + cityName.slice(1);
    document.querySelector('.current-city').textContent = currentCity;
    
    console.log('Aktualne miasto:', currentCity);
    drawChart();
}


export const changeUnits = () => {
    const unitBtns = document.querySelectorAll('.unit-type');
    unitBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const unitType = e.target.dataset.type;
            unitBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            showMeWeather(unitType);
        });
    });
}

// Dispaly the current time 
export const clock = () => {
    const timeDisplay = document.querySelector('.time');
    timeDisplay.innerHTML = moment().format('HH:mm:ss');
    setInterval(() => {
        const time = moment().format('HH:mm:ss');
        timeDisplay.innerHTML = time;
    }, 1000)

}