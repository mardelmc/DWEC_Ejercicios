function main(){
    setInterval(cambiarfoto, 2000);    
}

function cambiarfoto(){
    let imagenes = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    let imagenActual = document.getElementById("foto");
    let cadena = imagenActual.src;
    let num = parseInt(cadena.charAt(cadena.length - 5));
    if (num > 3){
        num = 0;
    }

    imagenActual.src = imagenes[num + 1];
}

window.addEventListener("load", main);