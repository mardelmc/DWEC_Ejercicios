window.addEventListener('DOMContentLoaded', main);
function main() {
    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        const telef = document.getElementById("telp");
        comprobarCampo(telef, comprobarTelefono);

        const dni = document.getElementById("dni");
        comprobarCampo(dni, comprobarDni);

        const correo = document.getElementById("mail");
        comprobarCampo(correo, comprobarCorreo);

        const formulario = document.getElementById('formulario');

        const camposIncorrectos = formulario.querySelectorAll('.incorrecto');
        if (camposIncorrectos.length === 0) {
            formulario.submit();
        }
    });

    const limpiar = document.querySelector('#btnLim');
    limpiar.addEventListener("click", function () {
        const formulario = document.querySelector("#formulario");
        for (let campo of formulario) {
            campo.classList.remove("incorrecto");
        }
        enviar.disabled = true;
    });


    enviar.disabled = true;

    const formInputs = document.querySelectorAll("#formulario input");
    formInputs.forEach(input => {
    input.addEventListener("input", function () {
        const camposIncorrectos = document.querySelectorAll('#formulario .incorrecto');
        enviar.disabled = camposIncorrectos.length === 0; // Activa el botón solo si no hay campos incorrectos
    });
});

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
