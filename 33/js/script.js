window.addEventListener('DOMContentLoaded', main);
function main() {
    const anioSelect = document.getElementById('year');
    rellenaSelectAnio(1965, anioSelect);


    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){

    const nombre = document.getElementById("name");
    comprobarNombre(nombre.value);

    const contrasena = document.getElementById("pass");
    const contrasenaV = document.getElementById("passV");
    comprobarContrasena(contrasena.value, contrasenaV.value);
    
    const anyo = document.getElementById("year");
    let seleccionado = anyo.options[document.querySelector("#year").selectedIndex];
    comprobarAnyo(seleccionado.value);
    


    const formulario = document.getElementById('formulario');
    if (/*y las demas*/true) formulario.submit();
    });
    const limpiar = document.querySelector('#btnLim');
    limpiar.addEventListener("click",function(){
        
        /*.classList.remove("incorrecto");*/
    })
}

function rellenaSelectAnio(desde, anioSelect){
    if (isNaN(desde)) desde = 1900;
    
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

}
function comprobarAlias(alias){
    
}
function comprobarContrasena(contrasena, contrasenaV){
    
}
function comprobarAnyo(anyo){

}
function comprobarSexo(sexo){

}
function comprobarAficiones(aficiones){

}
