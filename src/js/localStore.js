
const field = document.querySelector('#search-bar');
const checkbox = document.getElementById('checkbox');

export function load_(){
  var load = JSON.parse(localStorage.getItem("defaultCity"));
  defaultValue.city = load.city
}

export function save_(e){
  e.preventDefault();
  if (checkbox.checked == true){
  localStorage.setItem("defaultCity",JSON.stringify(`${field.value}`));
  }
}