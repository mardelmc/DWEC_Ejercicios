window.addEventListener('DOMContentLoaded', main);
function main(){
    const citas = document.querySelectorAll('#citas p');
    const imagenes = document.querySelectorAll('#imagenes img');
    
    const arraycitas = [
        "La vida es lo que pasa mientras estamos ocupados haciendo otros planes.",
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "La única manera de hacer un gran trabajo es amar lo que haces.",
        "El conocimiento es el único recurso que aumenta cuando se comparte.",
        "La creatividad es contagiosa, pásala.",
        "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
        "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "La única manera de hacer un amigo es ser uno.",
        "No busques errores, busca soluciones."
    ]
    
    const arrayimages = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg' ,'../images/5.jpg'];

   setInterval(generaCitas, 3000);
   setInterval(generaImagenes, 10000);

    function generaCitas(){
        for(let i = 0; i < 5; i++){
            const numAleatorio = Math.floor(Math.random() * (arraycitas.length));
            citas[i].textContent = arraycitas[numAleatorio];
        }
    }

    function generaImagenes(){
        for(let i = 0; i < 3; i++){
            const numAleatorio = Math.floor(Math.random() * (arrayimages.length));
            imagenes[i].src = arrayimages[numAleatorio];
        }
    }

}


