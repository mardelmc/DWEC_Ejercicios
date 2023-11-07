window.addEventListener('DOMContentLoaded', main);
function main() {
    rellenaAnio(1965);
}

function rellenaAnio(desde){
    if (isNaN(desde)) desde = 1900;
    const anioSelect = document.getElementById('year');
    const actual = new Date().getFullYear();
    for (let anio = desde; anio <= actual; anio++) {
        const option = document.createElement('option');
        option.value = anio;
        option.textContent = anio;
        anioSelect.appendChild(option);
    }
}