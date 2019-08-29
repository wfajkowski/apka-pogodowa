import CitiesFinder from './CitiesFinder.js';

const finder = new CitiesFinder();
const input = document.querySelector('.input');
const selectedPlace = document.querySelector('.sugestedList');
const searchButton = document.getElementById('search');
var val;

function display() {
    finder.getCities(this.value);
}

function setCityId() {
    finder.getCityId(selectedPlace);
}

export function returnCityId(id) {
    console.log(id);
    val = id;
}

function passCityId() {
    console.log(val);
}

function loseFocus() {
    console.log("Lost");

    event => {
        let target = event.target;
        (target.tagName != 'UL') ? true:selectedPlace.style.display = "none";
    }    
}

input.addEventListener('keyup', display);
// input.addEventListener('blur', loseFocus);
selectedPlace.addEventListener('click', setCityId, {
    capture: true
});
searchButton.addEventListener('click', passCityId);