let weather = {
    "01d": "weather (6)", //clear sky
    "01n": "weather (6)", //clear sky
    "02d": "weather (3)", //few clouds
    "02n": "weather (3)", //few clouds
    "03d": "weather (2)", //scattered clouds
    "03n": "weather (2)", //scattered clouds
    "04d": "weather (3)", //broken clouds
    "04n": "weather (3)", //broken clouds
    "09d": "weather (4)", //shower rain
    "09n": "weather (4)", //shower rain
    "10d": "weather (4)", //rain
    "10n": "weather (4)", //rain
    "11d": "weather (5)", //thunderstorm
    "11n": "weather (5)", //thunderstorm
    "13d": "weather (7)", //snow
    "13n": "weather (7)", //snow
    "50d": "weather (1)", //mist
    "50n": "weather (1)", //mist
}

export default function dailyWeatherBackground(icon, i) {
    const nextDays = document.getElementsByClassName('forecast-item');
    const key = `${icon}`;
    const src = weather[key];
    nextDays[i].setAttribute("style", `background-image: url("../src/img/${src}.jpg")`)
}