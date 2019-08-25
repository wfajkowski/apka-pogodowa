export default class CitiesFinder {
    constructor() {
        this.cities = [];
    }

    getCities(phrase) {
        fetch("../../res/cities.json")
            .then(res => res.json())
            .then(data => {
                this.cities.push(...data);
                return this.cities;
            })
            .then(cities => {
                const filtered = cities.filter(matched => {
                    const regexp = new RegExp(phrase,'gi');
                    return matched.name.match(regexp);
                })
                console.log(filtered)
                return filtered
            })
    }
}