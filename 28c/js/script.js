window.addEventListener("DOMContentLoaded", main);

function main() {
  let hoy = new Date("Dec 8 2023");
  let vacaciones = new Date("Dec 22 2023");

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
  const cont = document.querySelector("div p");
  cont.textContent = `¡Quedan ${total} para vacaciones!`;

}