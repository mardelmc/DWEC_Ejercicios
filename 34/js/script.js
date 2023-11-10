window.addEventListener('DOMContentLoaded', main);
function main() {
    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        const telef = document.getElementById("telp");
        if (comprobarTelefono(telef.value) == ""){
            invalido(telef); 
        }

        const dni = document.getElementById("dni");
        if (comprobarDni(dni.value) == ""){
            invalido(dni); 
        }

        const correo = document.getElementById("mail");
        if (comprobarCorreo(correo.value) == ""){
            invalido(correo); 
        }


        const formulario = document.getElementById('formulario');
        let envio = true;
        for (let campo of formulario) {
            if (campo.classList != "incorrecto") envio = false;
        }
        if (envio) formulario.submit();

    });
    const limpiar = document.querySelector('#btnLim');
    limpiar.addEventListener("click",function(){
        const formulario = document.querySelector("#formulario");
        for (let campo of formulario) {
            campo.classList.remove("incorrecto");
        }
    })
}

function invalido(nodo){
    nodo.classList.add("incorrecto");
}


function comprobarTelefono(telef){
    let salidaTelef = "";
    if(isNaN(telef)) salidaTelef = ""; 
    const telefonoRegex = /^[6-9]\d{8}$/;
    if (!telefonoRegex.test(telef)){ 
        salidaTelef = "";
    } else {
        salidaTelef = telef;
        console.log("bien" + telef);
    }
    return salidaTelef;
}

function comprobarDni(dni){
  let salida = "";
    if(dni == "") salida = "";
    
    const dniRegex = /^(\d{8})([A-Z])$/; 
    if (dniRegex.test(dni)) {
        const numeroDNI = dni.substring(0, 8); 
        const letraProvida = dni.charAt(8);
        const letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const resto = numeroDNI % 23;
        const letraCalculada = letrasPosibles.charAt(resto);
        if (! letraProvida == letraCalculada){
            salida = ""
        } else {
            salida = dni;
        }
    }

    return salida;
}

function comprobarCorreo(email) {
    let salida = "";

    if (email === "") {
        salida = "";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            salida = email;
        }
    }

    return salida;
}
