window.addEventListener('DOMContentLoaded', main);
function main() {
    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        let telefV = document.getElementById('telp');
        let telef = comprobarTelefono((telefV.value));
        if (telef === ""){
            telefV.classList.add("incorrecto");
        } else {
            telefV.classList.remove("incorrecto");
        };

        /*
        const dni = document.getElementById('dni');
        comprobarDni(dni);

        const email = document.getElementById('mail');
        comprobarEmail(email);*/ //--> sin terminar

        //si todo pasa la comprobacion de que no tiene ninguna clase de incorrecto,
        //el formulario se envia
        const formulario = document.getElementById('formulario');
        if (telefV.classList != "incorrecto"/*y las demas*/) formulario.submit();

    });
    const limpiar = document.querySelector('#btnLim');
    limpiar.addEventListener("click",function(){
        let telefV = document.getElementById('telp');
        telefV.classList.remove("incorrecto");
    })
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
  let salida = false;
    if(!dni.textContent == ""){
        const dniRegex = /^(\d{8})([A-Z])$/; 
        if (dniRegex.test(dni)) {
            const numeroDNI = dni.substring(0, 8); 
            const letraProvida = dni.charAt(8);
            const letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE';
            const resto = numeroDNI % 23;
            const letraCalculada = letrasPosibles.charAt(resto);
            if (! letraProvida == letraCalculada){
                console.log("El número de dni no es válido");
                alert('Por favor, ingrese su dni');
            } else {
                salida = true;
            }
        }
    }
    return salida;
}

function comprobarEmail(email){
  
    if(!email.textContent == ""){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("El correo electrónico no es válido");
            alert('Por favor, ingrese su email');
        }
    }
}


//if (function b (true) && function a (true)) 'formulario'.submit