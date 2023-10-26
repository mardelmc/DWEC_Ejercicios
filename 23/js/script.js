window.addEventListener('DOMContentLoaded', main);
function main() {
    const formulario = document.getElementsByTagName("button");
    formulario[0].addEventListener("click", abrirVentana);
}

function abrirVentana(){
    const seleccionado = document.querySelector('input[type="radio"]:checked');
    if (seleccionado) {
        const valorSeleccionado = seleccionado.value;
        switch (valorSeleccionado){
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
    }
}