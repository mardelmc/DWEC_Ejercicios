//María Del Moral

window.addEventListener("DOMContentLoaded", main);

/*MM: Esta parte de abajo es de María M */
const BT_VALORES = ["Guardar datos", "Resetear tabla", "Recuperar datos"];

function main() {
  /*MM: Esta parte de abajo es de Carlos */
  let numerosLoteria = [];
  /**/

  crearTabla(7, 7, "miTabla");
  const datos = [];
  prepararNumeros(datos, 49);
  rellenarTabla("miTabla", datos);
  crearBotones(3, "misBotones");

  /*MM: Esta parte de abajo es de Carlos */
  let botones = document.getElementsByTagName("button");

  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      let numero = parseInt(this.textContent);
      marcarNumero(numero, numerosLoteria);
      añadirClaseMarcado(this, numero, numerosLoteria);
    });
  }
  /**/

  /*MM: Esta parte de abajo es de María Mira */
  let bt_guardar = document.getElementById('bt_1');
  bt_guardar.addEventListener("click", () => guardarDatos());

  let bt_resetear = document.getElementById('bt_2');
  bt_resetear.addEventListener("click", () => rellenarTabla());

  let bt_recuperar = document.getElementById('bt_3');
  bt_recuperar.addEventListener("click", () => recuperarDatos());
  /**/
}

// Crea una tabla.
// Se le pasan filas, columnas, idTabla
function crearTabla(fila, columna, idTabla) {
  let contenedor = document.querySelector("main");
  let tabla = document.createElement("table");
  tabla.setAttribute("id", idTabla);
  for (let i = 0; i < fila; i++) {
    let filaElemento = document.createElement("tr");
    for (let j = 0; j < columna; j++) {
      let celda = document.createElement("td");
      let boton = document.createElement("button");
      boton.textContent = "";
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

//Carlos

// Función para marcar o desmarcar un número
function marcarNumero(numero, numerosLoteria) {
  numero = parseInt(numero);
  const index = numerosLoteria.indexOf(numero);
  if (index > -1) {
    // Si el número ya está marcado, lo desmarca y lo elimina del array
    numerosLoteria.splice(index, 1);
  } else {
    // Si el número no está marcado y hay menos de 6 números, se marca el número
    if (numerosLoteria.length < 6) {
      numerosLoteria.push(numero);
    } else {
      alert("Ya has seleccionado 6 números.");
      return;
    }
  }
  actualizaQuiniela(numerosLoteria);
}

// Funcin para actualizar los números seleccionados en la quiniela
// numerosSelec sería un input con los números seleccionados
function actualizaQuiniela(numerosLoteria) {
    const numerosSelec = document.querySelector('.numerosSeleccionados');
    numerosSelec.textContent = numerosLoteria.join(' | ');
  }

function añadirClaseMarcado(boton, numero, numerosLoteria) {
  if (numerosLoteria.includes(numero)) {
    boton.classList.add("marcado");
  } else {
    boton.classList.remove("marcado");
  }
  console.log("Número:", numero, "NumerosLoteria:", numerosLoteria, "Clases actuales:", boton.className);
}

//María Mira
/*
    Función crear un form con botones en el main. No devuelve nada
*/

function crearBotones(num_bt, idDiv) {
  let contenedor = document.querySelector("main");
  let form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("id", idDiv);

  for (let i = 0; i < num_bt; i++) {
    let boton = document.createElement("button");
    boton.setAttribute("id", `bt_${i + 1}`);
    boton.textContent = BT_VALORES[i];
    form.appendChild(boton);
  }

  contenedor.appendChild(form);
}

/*
    Función que guarda los datos de la tabla en una cookie. No devuelve nada
*/

function guardarDatos() {
  let marcados = document.querySelectorAll(".marcado");
  if (marcados.length == 6) {
    marcados.forEach((elemento) => {
        let num = elemento.textContent;
        document.cookie += `${num}|`;
    });
  } else {
    alert("Te faltan números de la quiniela, tiene que haber 6.");
  }
}

/*
    Función que resetea o "limpia" la tabla de números marcados
*/
function resetearTabla(){
    let marcados = document.querySelectorAll(".marcado");
    marcados.forEach((elemento) => {
        elemento.classList.remove("marcado");
    });
}

/*
    Función que recupera los datos guardados en la cookie y los vuelve a marcar
*/
function recuperarDatos(){
    let cookie = document.cookie.split('|');
    cookie.pop();
    let botones = document.querySelectorAll('table button');
    cookie.forEach((numero)  => {
        botones.forEach((boton) => {
            if (boton.textContent === numero) {
                marcarNumero(numero, cookie);
                añadirClaseMarcado(boton, numero, cookie);
            }
        });
    });
}

