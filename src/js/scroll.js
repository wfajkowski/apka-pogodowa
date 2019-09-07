export function scroll() {
    const search = document.getElementById('search');
    var elmnt = document.getElementById("weatherfor");
    search.onclick = function() {
        elmnt.scrollIntoView();
    }
}