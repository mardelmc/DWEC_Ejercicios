window.addEventListener('load', main);

let frase = ""; //VARIABLE GLOBAL

function main(){
    frase = prompt('Introduce algo: ')
    setInterval(bucle, 1000);
}


function bucle(){
    let cont = document.getElementById('contenedor');
    let titulo = cont.getElementsByTagName('h1');

    let longitud = frase.length;
    longitud--;
    frase = frase.substring(longitud) + frase.substring(0, longitud);

    titulo[0].textContent = frase;
    document.title = frase;
}
