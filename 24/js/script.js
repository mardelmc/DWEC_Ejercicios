window.addEventListener('DOMContentLoaded', main);
function main() {
    const formulario = document.getElementsByTagName("button");
    formulario[0].addEventListener("click", abrirVentana);
}

function abrirVentana(){
    const seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    if (seleccionados.length > 0) {
        seleccionados.forEach(function (valor) {
            switch (valor.value) {
                case "uno":
                    window.open("http://google.es");
                    break;
                case "dos":
                    window.open("http://wikipedia.es");
                    break;
                case "tres":
                    window.open("http://w3schools.com");
                    break;
                case "cuatro":
                    window.open("https://developer.mozilla.org/");
                    break;
                case "cinco":
                    window.open("https://es.wikipedia.org/wiki/JavaScript");
                    break;
            }
        });
    }
}