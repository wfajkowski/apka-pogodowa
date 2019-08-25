import '../css/style.css';
import CitiesFinder from './CitiesFinder.js';

const finder = new CitiesFinder();
// finder.getCities('h');

// const button = document.querySelector('#button');
const field = document.querySelector('#input');
const result = document.querySelector('.result');
function display(){
    // console.log(this.value)
    const matchArr = finder.getCities(this.value);
    console.log(matchArr)

    // const html = matchArr.map(place =>{
    //     return `
    //     <li>
    //         <span>${place.name}</span>
    //     </li>
    //     `
    // })
    // result.innerHTML = html;
}

field.addEventListener('keyup',display)