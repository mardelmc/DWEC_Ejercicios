window.addEventListener('DOMContentLoaded', main);
function main() {
    const direcciones = [
        "http://google.es",
        "https://wikipedia.es",
        "https://w3schools.com",
        "https://developer.mozilla.org/",
        "https://es.wikipedia.org/wiki/JavaScript"
    ]


    const select = document.querySelector("#formulario select");
    if (select) select.addEventListener('change', function() {
        var opcion = document.querySelector("option:checked").value;
        window.open(direcciones[opcion]);
    });
}
