window.addEventListener('DOMContentLoaded', main);
function main() {
    const anioSelect = document.querySelector('#year');
    rellenaSelectanio(anioSelect);
    let guardados = [];

    const enviar = document.querySelector('#btnEnv');
    enviar.addEventListener('click', function(){

        const nombre = document.querySelector('#name');
        if (comprobarNombre(nombre.value) == ''){
            invalido(nombre);
        }

        const alias = document.querySelector('#nick');
        if (comprobarNombre(alias.value) == ''){
            invalido(alias);
        }
        alias.addEventListener('change', function(){
            let recuperados = consultarGalleta(alias.value); 
            if (recuperados == "" ){
                return false;
            }
        console.log(recuperados.split('#'));
            rellenar(recuperados.split('#'));
        });

        const contrasenia = document.querySelector('#pass');
        const contraseniaV = document.querySelector('#passV');
        if (comprobarContrasenia(contrasenia.value, contraseniaV.value) == ''){
            invalido(contrasenia);
            invalido(contraseniaV);
        };
        
        const anio = document.querySelector('#year');
        let seleccionadoA = anio.options[document.querySelector('#year').selectedIndex];
        if(comprobarAnio(seleccionadoA.value) == ''){
            invalido(anio);
        }
        
        let seleccionadoR = document.querySelector('input[name="sex"]:checked');
        if(comprobarSexo(seleccionadoR) == ''){
            const labelS = document.querySelector('#labelS');
            invalido(labelS);
        }

        let seleccionadoC = document.querySelectorAll('input[type="checkbox"]:checked');
        if(comprobarAficiones(seleccionadoC) == ''){
            const labelA = document.querySelector('#labelA');
            invalido(labelA);
        }


        const formulario = document.querySelector('#formulario');
        let envio = true;
        for (let campo of formulario) {
            if (campo.classList == 'incorrecto') envio = false;
        }
        if(labelS.classList == 'incorrecto' && labelA.classList == 'incorrecto') envio = false;
        if (envio) {
            alert('enviado');
            formulario.submit();
            let arraySeleccionadoC = Array.from(seleccionadoC);
            let strSeleccionadoC = arraySeleccionadoC.map(item => item.value).join('&');
            guardados = [alias.value, nombre.value, contrasenia.value, anio.value, seleccionadoR.value, strSeleccionadoC];
            let strCookie = guardados.map(item => item).join('#');
        console.log(guardados);
            mandarGalleta(guardados[0], strCookie);
        }

    });
    const btnlimpiar = document.querySelector('#btnLim');
    btnlimpiar.addEventListener('click', limpiar);
}

function limpiar() {
    const formulario = document.querySelector('#formulario');
    for (let campo of formulario) {
        campo.classList.remove('incorrecto');
    }
    const labelS = document.querySelector('#labelS').classList.remove('incorrecto');
    const labelA = document.querySelector('#labelA').classList.remove('incorrecto');
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
    let salida = "";
    if (nombre == '') salida = "";
    const nombreRegex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]{2,10}$/;
    if (nombreRegex.test(nombre)){ 
        salida = nombre;
    }
    return salida;
}

function comprobarContrasenia(contrasenia, contraseniaV){
    let salida = "";
    if (contrasenia == "" && contraseniaV == "" && contrasenia != contraseniaV) {
        salida = "";
    } else {
       salida = contrasenia;
    }
    return salida;
}

function comprobarAnio(anio){
    if (anio == '') return "";
}

function comprobarSexo(sexo){
    if (sexo == undefined) return "";
}

function comprobarAficiones(aficiones){
    if (aficiones.length == 0) return "";
}

function invalido(nodo){
    nodo.classList.add('incorrecto');
}

function rellenar(datos) {
console.log('autocompleta');
    let nombre = document.querySelector('#name');

    let contrasenia = document.querySelector('#pass');
    let contraseniaV = document.querySelector('#passV');
    let anio = document.querySelector('#year');
    let seleccionadoR = document.querySelectorAll('input[name="sex"]');
    let seleccionadoC = document.querySelectorAll('input[type="checkbox"]');

    nombre.value = datos[0];
    contrasenia.value = datos[2];
    contraseniaV.value = datos[2];
    for (let i = 0; i < anio.options.length; i++) {
        if (anio.options[i].value == datos[3]){
            let seleccion = anio.options[i];
            seleccion.selected = true;
        }
    }

    for (let i = 0; i < seleccionadoR.length; i++) {
        if (seleccionadoR[i].value == datos[4]){
            let seleccion = seleccionadoR[i];
            seleccion.checked = true;
        }
    }

    let aficiones = datos[5].split('&')
    for (let i = 0; i < seleccionadoC.length; i++) {
        for (let j = 0; j < aficiones.length; j++){
            if (seleccionadoC[i].value == aficiones[j]){
                let seleccion = seleccionadoC[i];
                seleccion.checked = true;
            }
        }
    }
}
function mandarGalleta(nombre, valores){
    document.cookie = `${nombre}=${valores}`;
console.log(valores);
} 

function consultarGalleta(nombre){
    let galletitas = document.cookie.split('; ');
    let cookieEncontrada = galletitas.find(galleta => galleta.startsWith(nombre + '='));
    
    return cookieEncontrada ? cookieEncontrada.split('=')[1] : '';
}