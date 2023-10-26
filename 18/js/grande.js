window.addEventListener('load', main);
function main() {
        let cadena =  location.search;
        let num = cadena.split('?');
        texto = document.querySelector('h1');
        texto.textContent = num[1];
}