
const field = document.querySelector('#search-bar');

var mainCity = JSON.parse(localStorage.getItem('deafultCity')) || [];

localStorage.setItem('defaultCity', mainCity);

const checkbox = document.getElementById('checkbox')
const search = document.getElementById('search')
search.addEventListener('click', setDefault)

function setDefault(e) {
  e.preventDefault();
  if (checkbox.checked == true){
    localStorage.setItem('defaultCity', `${field.value}`);
  }
}

var mainCity1;

function load_(){
	mainCity = localStorage.getItem('deafultCity') || [];
}

