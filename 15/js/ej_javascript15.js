function principal(){
    const introduccion = document.getElementById("crear");
    introduccion.addEventListener("click", introduccionDatos);
    
    const borrado = document.getElementById("romper");
    borrado.addEventListener("click", borradoDatos);

}
window.addEventListener("load", principal);



let alerta = ""; //VARIABLE GLOBAL

function introduccionDatos(){
    let nombres = [];
    let edades = [];
     for(let i = 0; i < 5; i++){
         nombres[i] = prompt ("Introduce nombre:");
         edades[i] = parseInt(prompt ("Introduce edad:"));
         alerta += nombres[i] + '*' + edades[i] + '#';
     }
     window.alert(alerta);
     
 }

function borradoDatos(){
    personas = alerta.split('#');

    let str = '<table>';

    for (i = 0; i < personas.length - 1; i++ ){
        nombres = personas[i].split('*');        
        edades = personas[personas.length - 2 - i].split('*');

        str += '<tr>';
        str += '<td>' + nombres[0] + '</td>';
        str += '<td>' + edades[1] + '</td>';
        str += '</tr>'; 
    }
   
    str += '</table>';

    let cont = document.getElementById("contenedor");
    cont.innerHTML = str;
    alerta = "";
}