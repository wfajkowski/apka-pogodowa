import CitiesFinder from './CitiesFinder.js';

const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');
const searchButton = document.getElementById('search');
let val;
let latitude;
let longitude;

function display() {
    finder.getCities(this.value);
}

function setCityId(e) {
    finder.getCityId(selectedPlace);
    window.onclick = (e) => e.onblur = selectedPlace.style.visibility = "hidden";
}

export function returnCityId(id, lat, lon) {
    val = id;
    latitude = lat;
    longitude = lon;
}

function passCityId() {
    console.log(val, latitude, longitude);
<<<<<<< HEAD
}

function loseFocus() {
    console.log("Lost");

    event => {
        let target = event.target;
        (target.tagName != 'UL') ? true:selectedPlace.style.display = "none";
    }    
=======
>>>>>>> master
}

input.addEventListener('keyup', display);
selectedPlace.addEventListener('click', setCityId, {
    capture: true
});
searchButton.addEventListener('click', passCityId);