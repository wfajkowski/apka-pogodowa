const moment = require('moment');
export class APIrequest {
    // API request constructor
    constructor(city, typeOfRequest){
        const defaultCity = 'wroclaw';
        this.url = 'http://api.openweathermap.org/data/2.5/';
        this.appId = '15863c9657f4883dbb63c41d778aa851';
        this.city = city || defaultCity;
        this.typeOfRequest = typeOfRequest;
        this.units = 'metric';
    }
    makeRequest(){
        const result = fetch(
          `${this.url}${this.typeOfRequest}?q=${this.city}&APPID=${this.appId}&units=${this.units}`
        )
          .then(res => res.json())
          .then(data => {
            // console.log('test', data);
            if (this.typeOfRequest === 'weather'){
              
              const mainElements = [data.main, data.sys, data.weather, data.wind, data.dt];
              
              return mainElements;
            } else if (this.typeOfRequest === 'forecast') {
              // console.log('test', data);
              const list = [];
              data.list.forEach(item => list.push(item));
              // console.log(list[0].main, 'list');
              return list;

            }
          })
          .catch(error => console.log(error));
            return result;
    }
    displayData(){
        const weatherDiv = document.querySelector(".weather");
        const icon = document.querySelector(".icon img");
        const weatherInfo = document.querySelector(".actual-weather-info");
        const temp = document.querySelector(".temp");

        if (this.typeOfRequest === 'weather'){

         this.makeRequest()
           .then(res => {
             let result = [];
             const data = res;
            //  console.log("All info", data);
             data.forEach(item => result.push(item));
             return result;
           })
           .then((res) => {
                temp.innerHTML = JSON.stringify(res[0].temp) + "°C";
                icon.src = `http://openweathermap.org/img/w/${res[2][0].icon}.png`;
                weatherInfo.innerHTML = `
                    <p>Ciśnienie: <span>${JSON.stringify(res[0].pressure)}hPa</span></p>
                    <p>Wilgotność: <span>${JSON.stringify(res[0].humidity)}%</span></p>
                    <p>Temp min: <span>${JSON.stringify(res[0].temp_min)}°C</span></p>
                    <p>Temp max: <span>${JSON.stringify(res[0].temp_max)}°C</span></p>
                    <p>Siła wiatru: <span>${JSON.stringify(res[3].speed)}m/s</span></p>
                    <p>Godzina: <span>${moment.unix(JSON.stringify(res[4])).hour()}</span></p>
                `;
            });
            } else if (this.typeOfRequest === 'forecast'){
              this.makeRequest()
                .then(res => {
                  let result = [];
                  const data = res;
                  console.log("All info", data);
                  data.forEach(item => result.push(item));
                  return result;
                })
                .then((res) => {
                  const items = document.getElementsByClassName('item');
                  for(let i = 0; i < items.length; i++){
                      items[i].querySelector('.icon-hourly img').src = `http://openweathermap.org/img/w/${res[i]['weather'][0].icon}.png`;
                      items[i].querySelector('.temp-hourly').innerHTML = `${moment.unix(res[i]['dt']).hour()}`;
                  }
                });
            }
    }
}

// Setting default city and fetch data for it
export const init = () => {
  let defaultCity = 'wroclaw';
  if (localStorage.getItem("defaultCity")){
    defaultCity = localStorage.getItem("defaultCity").toLowerCase().replace(/"/g, "");
  }
  
  const defaultLocation = new APIrequest(defaultCity, "weather");
  const defaultForecastLocation = new APIrequest(defaultCity, "forecast");
  defaultLocation.displayData();
  defaultForecastLocation.displayData();
}

export const showMeWeather = () => {
  const searchBar = document.querySelector('#search-bar');
  const cityName = searchBar.value;
  console.log(searchBar.value);
  const weather = new APIrequest(cityName, 'weather');
  const forecastLocation = new APIrequest(cityName, 'forecast');
  weather.displayData();
  forecastLocation.displayData();
  // console.log(forecastLocation.displayData())
}