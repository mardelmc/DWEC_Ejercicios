window.addEventListener('DOMContentLoaded', main);
function main(){

    const agente = navigator.userAgent.toLowerCase();
    const logoNavegador = document.getElementById("logoNavegador");
    logoNavegador.src = navegador(agente);

    
    function navegador(nav){
        let ruta = "";
        switch (userAgent.includes(nav)){
            case nav == 'chrome': 
                ruta = "../images/chrome-logo.png";
                break;
            case nav == 'safari': 
                ruta = "../images/safari-logo.png";
                break;
            case nav == 'firefox': 
                ruta = "../images/firefox-logo.png";
                break;
            default:
                ruta = "../images/default-logo.png";
            }
            return ruta;
        }
}

