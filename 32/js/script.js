window.addEventListener('DOMContentLoaded', main);
function main() {
    const enviar = document.querySelector("button");
    enviar.addEventListener("click", valida());
}

function valida(){
    //telefono
    //dni
    //email
    console.log("boton pulsado");
    const email = document.querySelector("input#mail");
    email.validationError();

}