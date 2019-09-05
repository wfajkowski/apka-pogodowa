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
    )
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
    let unitSymbol = '';
    if(unit === 'metric'){
      unitSymbol = '°C';
    } else {
      unitSymbol = 'F';
    }
    // Actual weather
    if (this.typeOfRequest === 'weather') {
      const {
        main,
        sys,
        weather,
        wind,
        dt
      } = await this.makeRequest();
      console.log('main', main);
      console.log('sys', sys);
      console.log('weather', weather);
      console.log('wind', wind);
      console.log('dt', dt);
      // Display current weather data
      temp.innerHTML = main.temp + `<sup>${unitSymbol}</sup>`;
      icon.src = `../src/img/icons/png/${weather[0].icon}.png`;
      weatherInfo.innerHTML = `
          <p>Pressure: <span>${main.pressure} hPa</span></p>
          <p>Humidity: <span>${main.humidity} %</span></p>
          <p>Temp min: <span>${main.temp_min} ${unitSymbol}</span></p>
          <p>Temp max: <span>${main.temp_max} ${unitSymbol}</span></p>
          <p>Wind speed: <span>${wind.speed} m/s</span></p>
      `;
      weatherTxt.innerHTML = weather[0].main;
      sunrise.innerHTML = moment.unix(sys.sunrise).format('HH:mm');
      sunset.innerHTML = moment.unix(sys.sunset).format('HH:mm');
    } else if (this.typeOfRequest === 'forecast') {   // weather forecast
      const {
        list
      } = await this.makeRequest();
      console.log(list);

      // Display hourly forecast
      const showHourlyData = (type) => {
        const items = document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
          items[i].querySelector('.icon-hourly img').src = `../src/img/icons/png/${list[i]['weather'][0].icon}.png`;
          items[i].querySelector('.forecast-hour').innerHTML = `${moment.unix(list[i].dt).format('HH:mm')}`;
          items[i].querySelector('.forecast-text').innerHTML = `${list[i]['weather'][0]['description']}`;
          if(type !== 'wind'){
            items[i].querySelector('.temp-hourly').innerHTML = `${Math.floor(list[i]['main'][type])}`;
          } else {
            items[i].querySelector('.temp-hourly').innerHTML = `${list[i]['wind'].speed}`;
          }
        }
        const hourlyDataDivs = document.querySelectorAll('.hourly-data .item .temp-hourly');
        if (type === "temp") {
          hourlyDataDivs.forEach(item => item.append("°"));
        } else if (type === "pressure"){
          hourlyDataDivs.forEach(item => item.append(" hPa"));
        } else {
          hourlyDataDivs.forEach(item => item.append(" m/s"));
        }
      }
      showHourlyData('temp');

      const forecastButtons = document.querySelectorAll('.buttons .btn');
      forecastButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const dataType = e.target.dataset.type;
          forecastButtons.forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          await showHourlyData(dataType);
          drawChart();
        })
      })

      // Display next days forecast
      const dayData = list.filter(item => {
        return (moment.unix(item.dt).format('HH') === '14');
      })
      const nightData = list.filter(item => {
        return (moment.unix(item.dt).format('HH') === '02');
      })

      const nextDays = document.getElementsByClassName('forecast-item');
      for (let i = 0; i < nextDays.length; i++){
        nextDays[i].querySelector('.date').innerHTML = moment.unix(dayData[i].dt).format('dddd D.MM');
        nextDays[i].querySelector('img').src = `../src/img/icons/png/${dayData[i]['weather'][0].icon}.png`;
        // nextDays[i].querySelector('img').src = `https://openweathermap.org/img/w/${dayData[i]['weather'][0].icon}.png`;
        nextDays[i].querySelector('.day-temp').innerHTML = Math.floor(dayData[i].main.temp) + "°";
        nextDays[i].querySelector('.night-temp').innerHTML = Math.floor(nightData[i].main.temp) + "°";
        nextDays[i].querySelector('.text-info').innerHTML = dayData[i]['weather'][0]['description'];
        const icon = `${dayData[i]['weather'][0].icon}`;
        await dailyWeatherBackground(icon, i);
      }
    }
  }
}
import {drawChart} from './drawChart';