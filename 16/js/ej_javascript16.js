function principal(){
    frase = prompt ("Introduce una frase:");

    let cont = document.getElementById("contenedor");
    
    str = contarLetras();

    cont.innerHTML = str;
}
window.addEventListener("load", principal);

function contarLetras(){
    vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
  
    consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z']


    arrayfrase = frase.split('');
    console.log(arrayfrase);
    cantidadVocales = 0;
    cantidadConsonantes = 0;
    for(i = 0; i < arrayfrase.length; i++){
        if (vocales.includes(arrayfrase[i].toLowerCase())) {
            cantidadVocales++;
        }
        if (consonantes.includes(arrayfrase[i].toLowerCase())) {
            cantidadConsonantes++;
        }
    }
    
    str = "<p>Cantidad de vocales " + cantidadVocales + "</p><p>Cantidad de consonantes: " + cantidadConsonantes + "</p>";
    
    return str;
}