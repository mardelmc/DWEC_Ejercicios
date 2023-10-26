window.addEventListener("DOMContentLoaded", main);
function main() {
  let resolucion = `${window.screen.availWidth}x${window.screen.availHeight}`;
  const contenido = document.querySelector("#contenedor form");
  const resoluciones = [
    "1920x1080",
    "2560x1440",
    "3840x2160",
    "1280x720",
    "1366x768",
    "1680x1050",
    "1440x900",
    "1600x900",
    "2560x1600",
    "3440x1440",
    "5120x2880",
    "7680x4320",
  ];
  comprobar(resoluciones, resolucion);
  contenido.innerHTML +=  creacionRadios(resoluciones, resolucion);

}
function comprobar(resoluciones, resolucion) {
  if (!resoluciones.includes(resolucion)) {
    resoluciones.push(resolucion);
  }
}
function creacionRadios (resoluciones, resolucion){
    const longitud = resoluciones.length;
    let escribir = "";
    for (let i = 0; i < longitud; i++) {
      if (resolucion === resoluciones[i]) {
        escribir += `<p><label for="${resoluciones[i]}">${resoluciones[i]}</label><input type="radio" name="resolucion" id="${resoluciones[i]}" checked></p>`;
      } else {
        escribir += `<p><label for="${resoluciones[i]}">${resoluciones[i]}</label><input type="radio" name="resolucion" id="${resoluciones[i]}"></p>`;
      }
    }
    return (escribir);
}