export function geoFindMe() {

  const field = document.querySelector('#search-bar');
  
  field.textContent = '';

  function printCity(latitude, longitude){
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAUNTHswAMTYmVOmomwMblD5L8dG-bnkvk`)
     .then(resp => resp.json())
     .then(resp => {
      field.value = resp.results[6].address_components[0].short_name
      console.log(resp)
     })
    }

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
      printCity(latitude, longitude)
   // field.value = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
  function error() {
      field.value = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
      field.value = 'Geolocation is not supported by your browser';
  } else {
    field.value = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

