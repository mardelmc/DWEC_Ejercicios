window.addEventListener('DOMContentLoaded', main);
function main() {
    let id = "tabla";
    let filas = 7;
    let columnas = 7;
    crearTabla(filas , columnas, id);
    let arrayNumeros = prepararNumeros(1, 10, filas * columnas)
    rellenarTabla(id, arrayNumeros);
    let sumafila = 0;
    let sumacolumna = 0;
    let botones = document.querySelectorAll('button');
    for (let boton of botones) {
        boton.addEventListener('click', (boton) => {
            let btnPulsado = boton.target;
            console.log(btnPulsado);
            sumafila = sumar(btnPulsado, 'fila');
            sumacolumna = sumar(btnPulsado, 'columna');

            colocarResultado(sumafila, sumacolumna,btnPulsado.parentNode.id.charAt(0),btnPulsado.parentNode.id.charAt(2) )
        });
    }
   

}
function sumar (btnPulsado, tipo){
    let celdas = document.querySelectorAll('td');
    let pos = 0;
    if (tipo == 'columna') {
        pos = 2
    }
    let suma = 0;
    for (i = 0; i < celdas.length; i++){
        if (celdas[i].id.charAt(pos) == btnPulsado.parentNode.id.charAt(pos)){
            suma += parseInt(celdas[i].firstChild.textContent);
        } 
    }
    return suma;
}
function colocarResultado(resultadoFila, resultadoColumna, idFila, idColumna){
    idFila = parseInt(idFila);
    idColumna = parseInt(idColumna);

    let celdasF = document.querySelectorAll(`tr:nth-child(${idFila+1}) th`);
    celdasF[0].firstChild.textContent = resultadoFila;

    let celdasC = document.querySelectorAll(`table:last-child th:nth-child(${idColumna+1})`);
    for (i = 0; i < celdasC.length; i++){
       if (celdasC[i].id.charAt(0) == 'C'){
        celdasC[i].firstChild.textContent = resultadoColumna;
       }
    }
}
    
function crearTabla(filas, columnas, idTabla) {
    let contenedor = document.querySelector('#contenedor');
    let tabla = document.createElement('table');
    
    tabla.setAttribute('id' ,idTabla);
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement("td");
            celda.setAttribute('id', `${i}-${j}`)
            let celdaH = document.createElement("th");
           
            if (j == columnas -1){
                fila.appendChild(celdaH);
                celdaH.setAttribute('id', `F-${i}`)
                celdaH.textContent = "X";
            } else if (i != filas - 1){
                fila.appendChild(celda);
            } else {
                fila.appendChild(celdaH);
                celdaH.setAttribute('id', `C-${j}`)
                celdaH.textContent = "X";
            }
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}
function prepararNumeros (min, max, cantidad){
    let arrayNumeros = [];
    for (let i = 0; i < cantidad; i++) {
        arrayNumeros.push( Math.floor(Math.random() * (max - min) + min));
    }
   return arrayNumeros;
}
function rellenarTabla(id, arrayNumeros){
    celdatd = document.querySelectorAll(`#${id} tr td`);
    for (let i = 0; i < celdatd.length; i++) {
        let boton = document.createElement('button');
        celdatd[i].appendChild(boton);
        boton.textContent = arrayNumeros[i];
    }
    
}