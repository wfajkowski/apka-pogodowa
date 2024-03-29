import dailyWeatherBackground from './dailyWeatherBackground';
export const moment = require('moment');
export class APIrequest {
  // API request constructor
  constructor(city, typeOfRequest, units) {
    const defaultCity = 'wroclaw';
    this.url = 'https://api.openweathermap.org/data/2.5/';
    this.appId = '15863c9657f4883dbb63c41d778aa851';
    this.city = city || defaultCity;
    this.typeOfRequest = typeOfRequest;
    this.units = units;
  }
  async makeRequest() {
    const request = await fetch(
      `${this.url}${this.typeOfRequest}?q=${this.city}&APPID=${this.appId}&units=${this.units}`
    );
    return request.json();
  }

  async displayData() {
    const weatherDiv = document.querySelector(".weather");
    const icon = document.querySelector(".today-weather img");
    const weatherInfo = document.querySelector(".current-weather-info");
    const temp = document.querySelector(".temp");
    const weatherTxt = document.querySelector(".weather-text");
    const sunrise = document.querySelector(".sunrise span");
    const sunset = document.querySelector(".sunset span");
    let unit = this.units;
    let tempUnit = '';
    let windUnit = '';
    if (unit === 'metric') {
      tempUnit = '°C';
      windUnit = 'm/s';
    } else {
      tempUnit = 'F';
      windUnit = 'm/h';
    }
    // Actual weather
    if (this.typeOfRequest === 'weather') {
      try {
        const {
          main,
          sys,
          weather,
          wind,
          dt
        } = await this.makeRequest();
        // console.log('main', main);
        // console.log('sys', sys);
        // console.log('weather', weather);
        // console.log('wind', wind);
        // console.log('dt', dt);
        // Display current weather data
        temp.innerHTML = Math.round(main.temp * 10) / 10 + `<sup>${tempUnit}</sup>`;
        icon.src = `../src/img/icons/png/${weather[0].icon}.png`;
        weatherInfo.innerHTML = `
          <p>Pressure: <span>${main.pressure} hPa</span></p>
          <p>Humidity: <span>${main.humidity} %</span></p>
          <p>Temp min: <span>${Math.round(main.temp_min * 10) / 10} ${tempUnit}</span></p>
          <p>Temp max: <span>${Math.round(main.temp_max * 10) / 10} ${tempUnit}</span></p>
          <p>Wind speed: <span>${Math.round(wind.speed * 10) / 10} ${windUnit}</span></p>
      `;
        weatherTxt.innerHTML = weather[0].main;
        sunrise.innerHTML = moment.unix(sys.sunrise).format('HH:mm');
        sunset.innerHTML = moment.unix(sys.sunset).format('HH:mm');

        if (sys.country === "PL") {
          document.querySelector('.polish-city').textContent = ', Poland';
        } else {
          document.querySelector('.polish-city').textContent = '';
        }
      } catch (err) {
        console.log("Error: Invalid data input.");
        return alert("Plese enter a valid city");
      }
    } else if (this.typeOfRequest === 'forecast') { // weather forecast
      try {
        const {
          list
        } = await this.makeRequest();
        // console.log(list);

        // Display hourly forecast
        const showHourlyData = (type) => {
          const items = document.getElementsByClassName('item');
          for (let i = 0; i < items.length; i++) {
            items[i].querySelector('.icon-hourly img').src = `../src/img/icons/png/${list[i]['weather'][0].icon}.png`;
            items[i].querySelector('.forecast-hour').innerHTML = `${moment.unix(list[i].dt).format('HH:mm')}`;
            items[i].querySelector('.forecast-text').innerHTML = `${list[i]['weather'][0]['description']}`;
            if (type !== 'wind') {
              items[i].querySelector('.temp-hourly').innerHTML = `${Math.round(list[i]['main'][type] * 10) / 10}`;
            } else {
              items[i].querySelector('.temp-hourly').innerHTML = `${Math.round(list[i]['wind'].speed * 10) / 10}`;
            }
          }
          const hourlyDataDivs = document.querySelectorAll('.hourly-data .item .temp-hourly');
          if (type === "temp") {
            hourlyDataDivs.forEach(item => item.append("°"));
          } else if (type === "pressure") {
            hourlyDataDivs.forEach(item => item.append(" hPa"));
          } else {
            hourlyDataDivs.forEach(item => item.append(` ${windUnit}`));
          }
        };
        showHourlyData('temp');

        const forecastButtons = document.querySelectorAll('.buttons .btn');
        forecastButtons.forEach(btn => {
          btn.addEventListener('click', async (e) => {
            const dataType = e.target.dataset.type;
            forecastButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            await showHourlyData(dataType);
            drawChart();
          });
        });

        // Display next days forecast
        const dayData = list.filter(item => {
          return (moment.unix(item.dt).format('HH') === '14');
        });
        const nightData = list.filter(item => {
          return (moment.unix(item.dt).format('HH') === '02');
        });

        const nextDays = document.getElementsByClassName('forecast-item');
        for (let i = 0; i < nextDays.length; i++) {
          nextDays[i].querySelector('.date').innerHTML = moment.unix(dayData[i].dt).format('dddd D.MM');
          nextDays[i].querySelector('img').src = `../src/img/icons/png/${dayData[i]['weather'][0].icon}.png`;
          // nextDays[i].querySelector('img').src = `https://openweathermap.org/img/w/${dayData[i]['weather'][0].icon}.png`;
          nextDays[i].querySelector('.day-temp').innerHTML = Math.floor(dayData[i].main.temp) + "°";
          nextDays[i].querySelector('.night-temp').innerHTML = Math.floor(nightData[i].main.temp) + "°";
          nextDays[i].querySelector('.text-info').innerHTML = dayData[i]['weather'][0]['description'];
          const icon = `${dayData[i]['weather'][0].icon}`;
          await dailyWeatherBackground(icon, i);
        }
      } catch (err) {
        console.log("Error: Invalid data input.");
      }
    }
  }
}
import {
  drawChart
} from './drawChart';