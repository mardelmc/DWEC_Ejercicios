window.addEventListener('DOMContentLoaded', main);
function main() {
    const direcciones = [
        "http://google.es",
        "https://wikipedia.es",
        "https://w3schools.com",
        "https://developer.mozilla.org/",
        "https://es.wikipedia.org/wiki/JavaScript"
    ]


    const boton = document.getElementById("btn");
    if (boton) boton.addEventListener('click', function() {
        let opciones = document.querySelectorAll("option:checked");

        if (opciones) {
            fin = opciones.length
            for (let i = 0 ; i < fin; i++) {
                window.open(direcciones[opciones[i].value]);
            }
        }
})
}
