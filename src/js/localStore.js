
const field = document.querySelector('#search-bar');
const checkbox = document.getElementById('checkbox');

var defaultValue = {
  city: 0
}

export function load_(){
  // Added this 'if statement' because all further instructions were stopped
  if(!localStorage.getItem("defaultCity")){
    return
  }
  var load = JSON.parse(localStorage.getItem("defaultCity"));
  
  defaultValue.city = load.city;
}

export function save_(e){
  e.preventDefault();
  if (checkbox.checked == true){
  localStorage.setItem("defaultCity",JSON.stringify(`${field.value}`));
  }
}