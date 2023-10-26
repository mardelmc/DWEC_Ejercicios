window.addEventListener("DOMContentLoaded", main);

function main() {
  let hoy = new Date();
  let vacaciones = new Date("Dec 22 2024");

  let hoyTotal = contarDias(hoy);
  let vacacionesTotal = contarDias(vacaciones);

  pintarDias(vacacionesTotal - hoyTotal);
}

function contarDias(dia) {
  if (isNaN(dia)) return false;
  const inicioDelAnio = new Date(dia.getFullYear(), 0, 1);
  const diferenciaEnMilisegundos = dia - inicioDelAnio;
  const diasDelAnio = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
  const aniosAnteriores = dia.getFullYear() - 1;
  const diasAniosAnteriores = aniosAnteriores * 365 + Math.floor(aniosAnteriores / 4) - Math.floor(aniosAnteriores / 100) + Math.floor(aniosAnteriores / 400);
  const diasTotales = diasDelAnio + diasAniosAnteriores;

  return diasTotales;
}

function pintarDias(total) {
  if (isNaN(total)) return false;
  const contenido = document.querySelector("#contenedor");
  const imgNumeros = [
    "images/0.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
  ];

  total = total.toString();

  for (let i = 0; i < total.length; i++) {
    let numero = parseInt(total[i]);
    contenido.innerHTML += `<img src="${imgNumeros[numero]}">`;
  }
}