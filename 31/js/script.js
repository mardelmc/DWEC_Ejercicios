window.addEventListener('DOMContentLoaded', main);
const palabras = [
    "botijo",
    "cachivache",
    "trasto",
    "cacharro",
    "apechusque",
    "encartar",
    "avenate",
    "revenio",
    "zancajoso",
    "algarabia",
    "hueco",
    "locura",
    "purpura",
];
let letra = "";

function main() {
    const aleatorio = Math.floor(Math.random() * palabras.length);
    const palabra = palabras[aleatorio];
    pintaPanel(palabra);
    introduceLetra();
    introduceResuelvo(palabra);
}

function pintaPanel(palabra){
//Panel de las palabras y espacios
    const parrafo = document.querySelector(".panel p");
    arrayPalabra = palabra.split("");

    letrasAdivinadas = Array(arrayPalabra.length).fill('_');

    for (let i = 0; i < arrayPalabra.length; i++) {
        parrafo.textContent += `_ ` ;
    }
}


function actualizaPanel(letra) {
    const parrafo = document.querySelector(".panel p");

    let letraEncontrada = false;

    for (let i = 0; i < arrayPalabra.length; i++) {
        if (letra === arrayPalabra[i]) {
            letrasAdivinadas[i] = letra;
            letraEncontrada = true;
        }
    }

    if (!letraEncontrada) {
        pintaMoneco(1);
        comprobacionMensaje(letra);
        pintaFallidas(letra);
    }

    // Actualiza la representación de la palabra a mostrar
    let palabraMostrada = letrasAdivinadas.join(' ');
    parrafo.textContent = palabraMostrada;

    // Verifica si la palabra se ha completado
    if (!letrasAdivinadas.includes('_')) {
        comprobacionMensaje(2);
    }
}



function introduceLetra(){
// Introduce Letra
    let letra = ''; 
    const introduce = document.getElementById("btnInt");
    introduce.addEventListener("click", function () {
        letra = document.getElementById("introduce").value; 
        letra = letra.toLowerCase();
        if (letra == "") return false; 
        document.getElementById("introduce").value = "";
        actualizaPanel(letra);
    });
    
}

function introduceResuelvo(palabra){
//Muestra el panel de resolucion y introduce resuelvo
    const mos = document.getElementById("btnMos");
    const res = document.getElementById("btnRes");
    let introduceTexto = document.querySelector("#resuelvoTexto")
    mos.addEventListener("click", function () {
        introduceTexto.hidden = false;
        res.hidden = false;
        mos.hidden = true;
    });
    res.addEventListener("click", function () {
        let introduceTexto = document.querySelector("#resuelvoTexto")
        if(introduceTexto.value == palabra){
            ganas();
        } else {
            pierdes();
        }
    });
}
function pintaMoneco(fallo){
    let fallos;
    const moneco = document.querySelector("#cambio");
    switch(fallo){
        case 1:
            moneco.src="";
        break;
        case 2:
            moneco.src="./recursos/0.png";
        break;
        case 3:
            moneco.src="./recursos/1.png";
        break;
        case 4:
            moneco.src="./recursos/2.png";
        break;
        case 5:
            moneco.src="./recursos/3.png";
        break;
        case 6:
            moneco.src="./recursos/4.png";
        break;
        case 7:
            moneco.src="./recursos/5.png";
        break;
        default:
            moneco.src="./recursos/5.png";
    }
}

let letras = []
function pintaFallidas(letra){
//pinta letras fallidas, a la 7 muerte ->
    letras.push(letra);
    let fallidas = document.querySelector(".fallidas p");
    fallidas.textContent = letras.join(', '); // Une todas las letras fallidas con una coma
    if (letras.length > 6) {
        comprobacionMensaje(1);
    }
}
function comprobacionMensaje(comprueba){
    // Compruebacion letra, ganas o no. Pinta
    const parrafo = document.querySelector(".mensaje p");
    parrafo.textContent = comprueba;
    if(!isNaN(comprueba) && comprueba == 1){
        parrafo.textContent = "PIERDES";
        pierdes();
    } else if(!isNaN(comprueba) && comprueba == 2) {
        parrafo.textContent = "GANAS";
        ganas();
    }
}
function ganas(){
    alert ("HAS GANADO");
    location.reload(true);
}
function pierdes(){
    alert ("HAS PERDIDO");
    location.reload(true);
}