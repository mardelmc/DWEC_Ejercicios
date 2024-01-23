window.addEventListener('DOMContentLoaded', main);
function main(){
    let filas = 7;
    let columnas = 7;

    let tabla = crearTabla(filas, columnas);
    let contenedor = document.querySelector('#contenedor');
    contenedor.appendChild(tabla);

    let aleatorios = generarAleatorios(1, 3, filas * columnas)

    rellenarTabla(tabla, aleatorios);

    let nodos = document.querySelectorAll('table tr td'); 
    for (let td of nodos) {
        td.addEventListener('click', (td) => {
            let btnPulsado = td.target;
            console.log(btnPulsado);
            
            let filas = btnPulsado.parentNode.rowIndex;
            let columnas = btnPulsado.cellIndex;

            let resultadoFila = sumarFila(filas);
            let resultadoColumna = sumarColumna(columnas);
           
            let nodoFila = document.querySelectorAll(`tr:nth-child(${filas+1}) td:last-child`);
            let nodoColumna = document.querySelectorAll(`tr:last-child td:nth-child(${columnas+1})`);
            console.log(nodoFila);
            console.log(nodoColumna);

            colocarResultado(nodoFila, resultadoFila);
            colocarResultado(nodoColumna, resultadoColumna);
        });
    }
}

function crearTabla(filas, columnas){
    let tabla = document.createElement('table');
    for (let i = 0; i < filas + 1; i++){
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas + 1; j++) {
            let celda = document.createElement('td');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

function generarAleatorios(min, max, cantidad){
    let arrayNumeros = [];
    for (let i = 0; i < cantidad; i++) {
        arrayNumeros.push(Math.floor(Math.random() * (max - min) + min));
    }
   return arrayNumeros;
}

function rellenarTabla(tabla, aleatorios){
    let filas = tabla.childNodes;
    for (let i = 0; i < filas.length; i++){
        let celdas = filas[i].childNodes;
        for (let j = 0; j < celdas.length - 1 ; j++){
            celdas[j].textContent = aleatorios.shift();
        }
    }
}

function sumarFila (fila){
    console.log(fila + " fila");
    let nodos = document.querySelectorAll(`tr:nth-child(${fila + 1}) td`);
    let total = 0;

    nodos.forEach((celda) => {
        total += parseInt(celda.textContent) || 0;
    });

    return total;
}

function sumarColumna(columna){
    console.log(columna + " columna");
    let nodos = document.querySelectorAll(`td:nth-child(${columna + 1})`);
    let total = 0;

    nodos.forEach((celda) => {
        total += parseInt(celda.textContent) || 0;
    });

    return total;
}

function colocarResultado (nodo, resultado){
    console.log(nodo);
    console.log(resultado);
    nodo[0].textContent = resultado;
}