function main(){
    let cont = document.getElementById("contenedor");
    let imagenes = ["images/1.jpg", "images/2.jpg", "images/3.jpg"]

    let cadena =  location.search;
    let num = cadena.charAt(cadena.length - 1);

    if(num < 1 || num > 3){
        cont.innerHTML = "<p>IMAGEN NO LOCALIZADA</p>";
    } else {
        cont.innerHTML ='<img src="' + imagenes[num - 1] + '" alt="image" id="foto">';
    }

}
window.addEventListener("load", main);