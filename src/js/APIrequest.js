export default class APIrequest {
    // API request constructor
    constructor(city, typeOfRequest){
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
            // console.log(data);

            const { main, sys, weather, wind } = data;
            const mainElements = [main, sys, weather, wind];

            return mainElements;
          })
          .catch(error => console.log(error));
            return result;
    }
    displayData(){
        // Test
       
        const wheaterDiv = document.querySelector(".wheater");
        const icon = document.querySelector(".icon img");
        const wheaterInfo = document.querySelector(".wheater-info");
        const temp = document.querySelector(".temp");

         this.makeRequest()
           .then(res => {
             let result = [];
             const data = res;
            //  console.log("All info", data);
             data.forEach(item => result.push(item));
             return result;
           })
           .then((res) => {
                console.log(JSON.stringify(res));
                temp.innerHTML = JSON.stringify(res[0].temp) + "°C";
                icon.src = `http://openweathermap.org/img/w/${res[2][0].icon}.png`;
                wheaterInfo.innerHTML = `
                    <p>Ciśnienie: <span>${JSON.stringify(res[0].pressure)}hPa</span></p>
                    <p>Wilgotność: <span>${JSON.stringify(res[0].humidity)}%</span></p>
                    <p>Temp min: <span>${JSON.stringify(res[0].temp_min)}°C</span></p>
                    <p>Temp max: <span>${JSON.stringify(res[0].temp_max)}°C</span></p>
                    <p>Siła wiatru: <span>${JSON.stringify(res[3].speed)}m/s</span></p>
                `;
            });
    }
}



// const weather = new APIrequest('Warszawa', 'weather');
// weather.makeRequest();