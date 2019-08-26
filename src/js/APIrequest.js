export default class APIrequest {
    // API request constructor
    constructor(city, typeOfRequest){
        this.url = 'http://api.openweathermap.org/data/2.5/';
        this.appId = '15863c9657f4883dbb63c41d778aa851';
        this.city = city;
        this.typeOfRequest = typeOfRequest;
    }
    makeRequest(){
        const result = fetch(`${this.url}${this.typeOfRequest}?q=${this.city}&APPID=${this.appId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                const wheaterDiv = document.querySelector('.wheater');
                const icon = document.querySelector('.icon img');
                const wheaterInfo = document.querySelector('.wheater-info');
                const temp = document.querySelector('.temp');
                const {main, sys, weather, wind } = data;
                const mainElements = [main, sys, weather, wind];
                
                icon.src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
                console.log(icon.src);
                return mainElements;
            })
            .catch(error => console.log(error));
            return result;
    }
    displayData(){
        // Test
        console.log(this.makeRequest);
        const temp = document.querySelector('.temp');

    }
}



// const weather = new APIrequest('Warszawa', 'weather');
// weather.makeRequest();