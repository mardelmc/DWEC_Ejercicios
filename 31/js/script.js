window.addEventListener('DOMContentLoaded', main);
const palabra = "";
const letra = introduceLetra();

function main() {
    palabra = introducePalabra();
}

function introducePalabra(){
    do{
        const palabra = prompt ("Introduce palabra:");
        palabra = palabra.toLowerCase();
    }while (!/[a-z]+$/.test(palabra)); //!!!!!!!!!! 
    return palabra;
}

function pintaPanel(palabra){
    const parrafo = document.querySelector(".panel p");

}
function comprobacionMensaje(){
// Compruebacion letra, ganas o no. Pinta
}

function introduceLetra(){
// Introduce Letra
    return letra;
}

function introduceResuelvo(){
//Muestra el panel de rsolucion y introduce resuelvo
}

function pintaMoneco(){
// Va mostrando el moneco en diferentes estados
}

function pintaFallidas(letra){
//pinta letras fallidas, a la 7 muerte ->
}