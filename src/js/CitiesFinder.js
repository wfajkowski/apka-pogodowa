var latinize = require('latinize');
import {
    returnCityId
} from './index.js';

export default class CitiesFinder {
    constructor(phrase) {
        this.filtered = [];
        this.phrase = phrase;
    }

    getCities(phrase) {
        fetch("../../res/citiesPL.json")
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
                    return `
                    <li>
                        <span class="name" id="${place.id}">${placeName}</span>
                    </li>
                    `;
                }).join('');
                suggestedList.innerHTML = html;
            })
    }

    getCityId(list) {
        let returnedId;
        const input = document.querySelector('.input');
        list.onclick = function (event) {
            let target = event.target;
            if (target.tagName != 'SPAN') return;
            returnedId = target.id;
            returnCityId(returnedId);
            list.style.display = "none";
            input.value = target.innerHTML;
        };
    }
}