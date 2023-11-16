window.addEventListener('DOMContentLoaded', main);
function main() {
    mandarGalleta("maria", "1234");
    mandarGalleta("estudiante", "oretania");

    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        const nombre = document.querySelector("#name");
        const contrasenia = document.querySelector("#pass");
        if (nombre.value == "" || consultarGalleta(nombre.value) == ""){
            invalido(nombre);
            return false;
        }
      
        if (contrasenia.value == "" || contrasenia.value != consultarGalleta(nombre.value)){
            console.log(contrasenia.value);
            console.log(consultarGalleta(nombre.value));
            invalido(contrasenia);
            return false;
        } 


        const formulario = document.querySelector('#formulario');
        let envio = true;
        for (let campo of formulario) {
            if (campo.classList == "incorrecto") envio = false;
        }
        if (envio) {
            window.open("https://google.es");
            //formulario.submit();
        }
    });
    const btnlimpiar = document.querySelector('#btnLim');
    btnlimpiar.addEventListener("click", limpiar);
}
function limpiar() {
    const formulario = document.querySelector("#formulario");
    for (let campo of formulario) {
        campo.classList.remove("incorrecto");
    }
}

function invalido(nodo){
    nodo.classList.add("incorrecto");
}

function mandarGalleta(nombre, valores){
    document.cookie = `${nombre}=${valores}`;
console.log(valores);
} 

function consultarGalleta(nombre){
    let galletitas = document.cookie.split('; ');
    let cookieEncontrada = galletitas.find(galleta => galleta.startsWith(nombre + '='));
    
    return cookieEncontrada ? cookieEncontrada.split('=')[1] : '';
}