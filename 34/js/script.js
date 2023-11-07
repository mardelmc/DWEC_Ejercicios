window.addEventListener('DOMContentLoaded', main);
function main() {
    const anioSelect = document.getElementById('year');
    rellenaSelectAnio(anioSelect);


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

    const contrasena = document.getElementById("pass");
    const contrasenaV = document.getElementById("passV");
    if (comprobarContrasena(contrasena.value, contrasenaV.value) == ""){
        invalido(contrasena);
        invalido(contrasenaV);
    };
    
    const anyo = document.getElementById("year");
    let seleccionadoA = anyo.options[document.querySelector("#year").selectedIndex];
    if(comprobarAnyo(seleccionadoA.value) == ""){
        invalido(anyo);
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
    let envio = false;
    for (let campo of formulario) {
       if (campo.classList != "incorrecto") envio = true;
    }
    if(labelS.classList == "incorrecto" && labelA.classList == "incorrecto") envio = false;
    if (envio) formulario.submit();
    });
    const limpiar = document.querySelector('#btnLim');
    limpiar.addEventListener("click",function(){
        const formulario = document.querySelector("#formulario");
        for (let campo of formulario) {
            campo.classList.remove("incorrecto");
        }
        const labelS = document.getElementById('labelS').classList.remove("incorrecto");
        const labelA = document.getElementById('labelA').classList.remove("incorrecto");
    })
}

function rellenaSelectAnio(anioSelect){
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

function comprobarContrasena(contrasena, contrasenaV){
    if (contrasena == "" && contrasenaV == "" && contrasena != contrasenaV) {
        return "";
    } else {
        return contrasena;
    }
}

function comprobarAnyo(anyo){
    if (anyo == "") return "";
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
