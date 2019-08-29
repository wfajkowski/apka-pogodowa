var latinize = require('latinize');
import {
    returnCityId
} from './citiesSearch.js';

export default class CitiesFinder {
    constructor(phrase) {
        this.filtered = [];
        this.phrase = phrase;
    }

    getCities(phrase) {
        fetch('../../res/citiesPL.json')
            .then(res => res.json())
            .then(data => {
                this.cities = [];
                this.cities.push(...data);
                return this.cities;
            })
            .then(cities => {
                this.filtered = cities.filter(matched => {
                    const regexp = new RegExp(latinize(phrase), 'gi');
                    return matched.name.match(regexp);
                })
                return this.filtered;
            }).then(el => {
                const suggestedList = document.querySelector('.sugestedList');
                this.filtered = el;
                const html = this.filtered.map(place => {
                    let placeName = place.name;
                    suggestedList.style.display = "block";
                    return `
                    <li>
                        <span class="name" id="${place.id}" data-lat="${place.coord.lat}" data-lon="${place.coord.lon}">${placeName}</span>
                    </li>
                    `;
                }).join('');
                suggestedList.innerHTML = html;
            })
    }

    getCityId(list) {
        let returnedId;
        let lat;
        let lon;
        const input = document.querySelector('.input');
        list.onclick = function (event) {
            let target = event.target;
            if (target.className != 'name') return;
            returnedId = target.id;
            lat = target.dataset.lat;
            lon = target.dataset.lon;
            returnCityId(returnedId, lat, lon);
            list.style.display = "none";
            input.value = target.innerHTML;
        };
    }
}