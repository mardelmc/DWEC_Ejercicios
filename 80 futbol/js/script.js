window.addEventListener('DOMContentLoaded', main);

var jornadas = [];
var equipos_seguidos1 = "Sevilla1 - Elche C.F; Cádiz - Celta de Vigo; Villareal - Real Madrid; Rayo Vallecano - Osasuna; Atlético Madid - Getafe; Alavés - Valencia C.F.; Levante - Betis; Real Sociedad - Granada; RCD Español - Barcelona; R.C.D. Mallorca - Athletic";
var equipos_seguidos2 = "Sevilla2 - Elche C.F; Cádiz - Celta de Vigo; Villareal - Real Madrid; Rayo Vallecano - Osasuna; Atlético Madid - Getafe; Alavés - Valencia C.F.; Levante - Betis; Real Sociedad - Granada; RCD Español - Barcelona; R.C.D. Mallorca - Athletic";
jornadas.push(equipos_seguidos1);
jornadas.push(equipos_seguidos2);

function main(){
    let contenedor = document.querySelector('#contenedor')
    let filas = 20;
    let columnas = 2;
    let idTabla = "tabla";
    //contenedor.appendChild(crearTabla(filas, columnas, idTabla));

    rellenarEquipos(jornadas, idTabla);
    
    let registrar = document.querySelector('#registrar');
    registrar.addEventListener('click', () => { 
        let datos = registrarDatos(idTabla); 
    });
    let guardar = document.querySelector('#guardar');
    guardar.addEventListener('click', () => { 
        guardar(); 
    });
}

function crearTabla(filas, columnas, idTabla){
    let tabla = document.createElement('table');
    tabla.setAttribute('id', idTabla)
    for (let i = 0; i < filas ; i++){
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++){
            let celda = document.createElement('td');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}   

function rellenarEquipos(jornada, idTabla){
    let equipos = jornada[0].split(';');
    let putoarray = [];
    equipos.forEach(equipo => {
        equipo = equipo.split('-');
        putoarray.push(equipo);
    });
    
    let filas = document.querySelectorAll(`#${idTabla} tr`);
  
    for (let i = 1; i < filas.length; i++){
        let celdas = filas[i].childNodes;
        celdas[1].textContent = putoarray[i-1].shift();
        celdas[3].textContent = putoarray[i-1].shift();
    }
}

function registrarDatos(idTabla){
    let filas = document.querySelectorAll(`#${idTabla} tr input`);
    console.log(filas);/*
    let putoarray = [];
    for (let i = 2; i < filas.length; i++){
        console.log(filas[i])
        let celdas = filas[i].childNodes;
        for (let j = 0; i < celdas.length; i++){
            console.log(celdas[j])
            if (celdas[j].childElementCount <= 1){
                putoarray.push(celdas[j]);
            }
        }
    }
    console.log(putoarray);*/ 
}