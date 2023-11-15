window.addEventListener('DOMContentLoaded', main);
function main() {
    mandarGalleta("usuario", "maria");
    mandarGalleta("contrasenia", "1234");

    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        const nombre = document.getElementById("name");
        if (nombre.value == ""){
            invalido(nombre);
        } else {
            if (nombre.value != consultarGalleta("usuario")){
                alert("Nombre invalido");
                invalido(nombre);
            }
        }
        const contrasenia = document.getElementById("pass");
        if (contrasenia.value == ""){
            invalido(contrasenia);
        } else {
            if (contrasenia.value != consultarGalleta("contrasenia")){
                alert("Contraseña invalida");
                invalido(contrasenia);
            }
        }


        const formulario = document.getElementById('formulario');
        let envio = true;
        for (let campo of formulario) {
            if (campo.classList == "incorrecto") envio = false;
        }
        if (envio) {
            //window.open("https://google.es");
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

function mandarGalleta(nombre, valor, caducidad)
{
 document.cookie = nombre + "=" + escape(valor)
 + ((caducidad == null) ? "" : ("; expires=" +
 caducidad.toGMTString()))
} 

function consultarGalleta(nombre) {
    var buscamos = nombre + "=";
    if (document.cookie.length > 0){ 
        i = document.cookie.indexOf(buscamos);
        if (i != -1) {
            i += buscamos.length;
            j = document.cookie.indexOf(";", i);
            if (j == -1){
                j = document.cookie.length;
                return unescape(document.cookie.substring(i,j));
                
            }
        }
    }
}