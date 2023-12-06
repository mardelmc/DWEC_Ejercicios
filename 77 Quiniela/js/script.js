window.addEventListener('DOMContentLoaded', main);

function main() {
    crearTabla(7, 7, 'miTabla');
    const datos = [];
    prepararNumeros(datos, 49); 
    rellenarTabla('miTabla', datos);
}

// Crea una tabla.
// Se le pasan filas, columnas, idTabla
function crearTabla(fila, columna, idTabla){
    let contenedor = document.querySelector('main');
    let tabla = document.createElement('table');
    tabla.setAttribute('id', idTabla);
    for (let i = 0; i < fila; i++) {
        let filaElemento = document.createElement('tr');
        for (let j = 0; j < columna; j++) {
            let celda = document.createElement('td');
            let boton = document.createElement('button');
            boton.textContent = '';
            celda.appendChild(boton);
            filaElemento.appendChild(celda);
        }
        tabla.appendChild(filaElemento);
    }
    contenedor.appendChild(tabla);
}

// Funcion preparar.
// Se le pasan array de numeros, maximo de numeros que debe tener, relleno (si no se le pasa nada rellenará con los numeros restantes)
// Se le puede pasar array vacío, no hace falta ponerle relleno tampoco
// Devuelve array completado
function prepararNumeros(datos, maximo, relleno) {
    let faltantes;
    if (datos.length < maximo) {
        faltantes = maximo - datos.length;

        for (let i = 0; i < faltantes; i++) {
            if (relleno != undefined) {
                datos.push(relleno);
            } else {
                datos.push(datos.length + 1);
            }
        }
    }
    return datos;
}

// Funcion rellenar
// Se le pasa el idTabla y el array de datos
function rellenarTabla(idTabla, datos) {
    let elementosTabla = document.querySelectorAll(`#${idTabla} td button`);
    for (let i = 0; i < datos.length; i++) {
        elementosTabla[i].textContent = datos[i];
    }
}