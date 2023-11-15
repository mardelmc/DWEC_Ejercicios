window.addEventListener('DOMContentLoaded', main);
function main() {
    const anioSelect = document.getElementById('year');
    rellenaSelectanio(anioSelect);
    let guardados = [];

    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){

        const nombre = document.getElementById("name");
        if (comprobarNombre(nombre.value) == ""){
            invalido(nombre);
        }

        const alias = document.getElementById("nick");
        if (comprobarAlias(alias.value) == ""){
            invalido(alias);
        }
        alias.addEventListener("change", function(){
            if (alias.value == guardados[1]) rellenar(guardados);
        })

        const contrasenia = document.getElementById("pass");
        const contraseniaV = document.getElementById("passV");
        if (comprobarContrasenia(contrasenia.value, contraseniaV.value) == ""){
            invalido(contrasenia);
            invalido(contraseniaV);
        };
        
        const anio = document.getElementById("year");
        let seleccionadoA = anio.options[document.querySelector("#year").selectedIndex];
        if(comprobarAnio(seleccionadoA.value) == ""){
            invalido(anio);
        }
        
        let seleccionadoR = document.querySelector('input[name="sex"]:checked');
        if(comprobarSexo(seleccionadoR) == ""){
            const labelS = document.getElementById('labelS');
            invalido(labelS);
        }

        let seleccionadoC = document.querySelectorAll('input[type="checkbox"]:checked');
        if(comprobarAficiones(seleccionadoC) == ""){
            const labelA = document.getElementById('labelA');
            invalido(labelA);
        }


        const formulario = document.getElementById('formulario');
        let envio = true;
        for (let campo of formulario) {
            if (campo.classList == "incorrecto") envio = false;
        }
        if(labelS.classList == "incorrecto" && labelA.classList == "incorrecto") envio = false;
        if (envio) {
            alert("enviado");
            //formulario.submit();
            guardados = [nombre.value, alias.value, contrasenia.value, anio.value, seleccionadoR.value, seleccionadoC];
            mandarGalleta("nombre",nombre.value);
            mandarGalleta("alias",alias.value);
            mandarGalleta("contrasenia",contrasenia.value);
            mandarGalleta("anio",anio.value);
            mandarGalleta("seleccionadoR",seleccionadoR.value);
            let strSeleccionadoC = "";
            for (let i = 0; i < seleccionadoC.length; i++){
                strSeleccionadoC += seleccionadoC[i].value + ","
            }
            mandarGalleta("seleccionadoC",strSeleccionadoC);
        }

    });
    const btnlimpiar = document.querySelector('#btnLim');
    btnlimpiar.addEventListener("click", limpiar);
}

function limpiar() {
    const formulario = document.querySelector("#formulario");
    for (let campo of formulario) {
        campo.classList.remove("incorrecto");
    }
    const labelS = document.getElementById('labelS').classList.remove("incorrecto");
    const labelA = document.getElementById('labelA').classList.remove("incorrecto");
}

function rellenaSelectanio(anioSelect){
    let desde = 1965;
    
    const actual = new Date().getFullYear();
    for (let anio = desde; anio <= actual; anio++) {
        const option = document.createElement('option');
        option.value = anio;
        option.textContent = anio;
        option.id = anio;
        anioSelect.appendChild(option);
    }
}

function comprobarNombre(nombre){
    if (nombre == "") return "";
}

function comprobarAlias(alias){
    if (alias == "") return "";
}

function comprobarContrasenia(contrasenia, contraseniaV){
    if (contrasenia == "" && contraseniaV == "" && contrasenia != contraseniaV) {
        return "";
    } else {
        return contrasenia;
    }
}

function comprobarAnio(anio){
    if (anio == "") return "";
}

function comprobarSexo(sexo){
    if (sexo == undefined) return "";
}

function comprobarAficiones(aficiones){
    if (aficiones.length == 0) return "";
}

function invalido(nodo){
    nodo.classList.add("incorrecto");
}

function rellenar(guardados) {
    console.log("autocompleta");
    let nombre = document.getElementById("name");

    let contrasenia = document.getElementById("pass");
    let contraseniaV = document.getElementById("passV");
    let anio = document.getElementById("year");
    let seleccionadoR = document.querySelectorAll('input[name="sex"]');
    let seleccionadoC = document.querySelectorAll('input[type="checkbox"]');

    nombre.value = guardados[0];
    contrasenia.value = guardados[2];
    contraseniaV.value = guardados[2];
    for (let i = 0; i < anio.options.length; i++) {
        if (anio.options[i].value == guardados[3]){
            let seleccion = anio.options[i];
            seleccion.selected = true;
        }
    }

    for (let i = 0; i < seleccionadoR.length; i++) {
        if (seleccionadoR[i].value == guardados[4]){
            let seleccion = seleccionadoR[i];
            seleccion.checked = true;
        }
    }

    for (let i = 0; i < seleccionadoC.length; i++) {
        for (let j = 0; j < guardados[5].length; j++){
            if (seleccionadoC[i].value == guardados[5][j].value){
                let seleccion = seleccionadoC[i];
                seleccion.checked = true;
            }
        }
    }

}
function mandarGalleta(nombre, valor, caducidad)
{
 document.cookie = nombre + "=" + escape(valor)
 + ((caducidad == null) ? "" : ("; expires=" +
 caducidad.toGMTString()))
} 