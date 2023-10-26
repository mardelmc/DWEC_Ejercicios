function main(){
    let contenedor = document.getElementById("contenedor");


    contenedor.innerHTML = primero + segundo + tercero;
    setInterval(main, 1000); 
}
window.addEventListener("load", main);

// Dividir en funciones esto, meter el setInterval solo para la hora
// Interpolacion en el resto

function fecha(){

    let fecha = new Date();
    let semana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    let primero = "<p>Fecha: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "</p>";
    let segundo = "<p>Hoy es " + semana[fecha.getDay()] + " " + fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear() + "</p>";
    let tercero = "<p class = 'hora'>" + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + "</p>";
    return primero, segundo, tercero;

}