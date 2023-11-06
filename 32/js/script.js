window.addEventListener('DOMContentLoaded', main);
function main() {
    const enviar = document.querySelector("#btnEnv");
    enviar.addEventListener("click", function(){
        const telef = document.getElementById('telp');
        if(!telef.textContent == ""){
            const telefonoRegex = /^[6-9]\d{8}$/;
            if (! telefonoRegex.test(telef)) {
                console.log("El número de teléfono no es válido");
                alert('Por favor, ingrese su tel');
            }
        } else {
            alert("Esta vacio el tel")
        }
        

        const dni = document.getElementById('dni');
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
                }
            }
        }

        const email = document.getElementById('mail');
        if(!email.textContent == ""){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.log("El correo electrónico no es válido");
                alert('Por favor, ingrese su email');
            }
        }
    });
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
//if (function b (true) && function a (true)) 'formulario'.submit