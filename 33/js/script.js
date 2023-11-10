window.addEventListener('DOMContentLoaded', main);
function main() {
    const añoSelect = document.getElementById('year');
    rellenaSelectaño(añoSelect);


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

        const contraseña = document.getElementById("pass");
        const contraseñaV = document.getElementById("passV");
        if (comprobarContraseña(contraseña.value, contraseñaV.value) == ""){
            invalido(contraseña);
            invalido(contraseñaV);
        };
        
        const año = document.getElementById("year");
        let seleccionadoA = año.options[document.querySelector("#year").selectedIndex];
        if(comprobarAño(seleccionadoA.value) == ""){
            invalido(año);
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

function rellenaSelectaño(añoSelect){
    let desde = 1965;
    
    const actual = new Date().getFullYear();
    for (let año = desde; año <= actual; año++) {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        option.id = año;
        añoSelect.appendChild(option);
    }
}

function comprobarNombre(nombre){
    if (nombre == "") return "";
}

function comprobarAlias(alias){
    if (alias == "") return "";
}

/*
    Con dos contraseñas como parametro, comprueban que están vacías y que no son iguales para devolver "";
    sino se devuelve la contraseña.
*/
function comprobarContraseña(contraseña, contraseñaV){
    if (contraseña == "" && contraseñaV == "" && contraseña != contraseñaV) {
        return "";
    } else {
        return contraseña;
    }
}

function comprobarAño(año){
    if (año == "") return "";
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
