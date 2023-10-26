window.addEventListener('load', main);
function main() {
    // Seleccion del array de botones
    let botones = document.querySelectorAll('#contenedor button');
    let resultado = document.querySelector('#contenedor th');
    let operandos = ['+', '-', '*', '/'];
    let valorActual = 0;
    let num1 = '';
    let num2 = '';
    let operador = '';
    let guardado = '';
    let acumulado = '';

    // Por cada boton del array de botones, si hay click manda a operacion
    for (boton of botones) {
        boton.addEventListener('click', operacion);
    }

    // Evento representa el evento de click
    function operacion(evento) {
        // Evento.target, referencia al elemento que se hizo click
        let btnPulsado = evento.target.id;

        //console.log(btnPulsado);
        if (btnPulsado === 'lupa'){
            lupa();
        }

        if (!isNaN(btnPulsado)) {
            acumulado += btnPulsado;
            escritura(acumulado); 
        } else if (operandos.includes(btnPulsado)) {
            escritura(btnPulsado);
            if (operador === '') {
                if (acumulado != '') {
                    valorActual = parseFloat(acumulado);
                }
                operador = btnPulsado;
            } else {
                num2 = parseFloat(acumulado);
                valorActual = calculo(valorActual, num2, operador);
                operador = btnPulsado;             
            }
            acumulado = '';
        } else if (btnPulsado === '=') {
            if (operador !== '') {
                operadorIgual = operador;
            }
            if (acumulado !== '') {
                num2 = parseFloat(acumulado);
            }
            if (operadorIgual !== '' && num2 !== '') {
                valorActual = calculo(valorActual, num2, operadorIgual);
                escritura(valorActual);
                operador = '';
            }
            acumulado = '';
        } else if (btnPulsado === 'ce') {
            valorActual = 0;
            num2 = '';
            acumulado = '';
            operador = '';
            escritura(0);
        } else if (btnPulsado === 'me') { // GUARDA
            guardado = valorActual;
            escritura(valorActual);
            
        } else if (btnPulsado === 're') { // RECUPERA
            acumulado = guardado;
            escritura(acumulado);
           
        }
       
    }

    function escritura(dato) {
        resultado.textContent = dato;
    }

    function calculo(a, b, operador) {
        let resultado = 0;
        switch (operador) {
            case '+':
                resultado = a + b;
                break;
            case '-':
                resultado = a - b;
                break;
            case '*':
                resultado = a * b;
                break;
            case '/':
                resultado = a / b;
                break;
            default:
                return '';
        }
        return resultado;
    }

    function lupa(){
        let numero = document.querySelector('th').textContent;
        window.open(url =`js/grande.html?${numero}`, '_blank');
    }
}