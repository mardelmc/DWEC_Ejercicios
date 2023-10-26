window.addEventListener('DOMContentLoaded', main);
function main() {
    let arrayNumeros = [];


    arrayNumeros = introduce(arrayNumeros);
    arrayNumeros = ordena(arrayNumeros);

    let longitud = arrayNumeros.length;
    const tabla = document.querySelectorAll('table tr td')
    for (let i = 0; i < longitud; i++) {
        tabla[i].textContent = arrayNumeros[i];
        tabla[i].style.backgroundColor = "black";
        tabla[i].style.color = "white";
        tabla[0].style.backgroundColor = "olive";
        tabla[longitud - 1].style.backgroundColor = "tomato";
    }


    function introduce(arrayNumeros) {
        for (let i = 0; i < 10; i++) {
            do {
                arrayNumeros[i] = parseInt(prompt(`Introduce numero ${i + 1}: `))
            } while (isNaN(arrayNumeros[i]));
        }
        return arrayNumeros;
    }

    function ordena(arrayNumeros) {
        let longitud = arrayNumeros.length;
        let cambio;
        do {
            cambio = false;
            for (let i = 0; i < longitud - 1; i++) {
                if (arrayNumeros[i] > arrayNumeros[i + 1]) {
                    let temp = arrayNumeros[i];
                    arrayNumeros[i] = arrayNumeros[i + 1];
                    arrayNumeros[i + 1] = temp;
                    cambio = true;
                }
            }
        } while (cambio);
        return arrayNumeros;
    }
}
