  
/* slider*/

let indiceDiapo = 1;

mostrarDiapos(indiceDiapo) /* llamo la funcion que muestra la diapo en el indiceDiapo*/

function mostrarDiapos(n){ /* defino la funcion que muestra la diapo. el 'n' es indice de la imagen*/
 let diapositivas = document.getElementsByClassName("diapos"); /*cargo las diapo desde el html*/
 let puntos = document.getElementsByClassName("punto"); /*cargo los puntitos del htmb*/
 if (n>diapositivas.length){
    indiceDiapo = 1;
 }else if (n<1){
    indiceDiapo= diapositivas.length; //este if, se ocupa de que los indices estén correctos
 }else{
    indiceDiapo = n;
 }

 for (let i = 0; i < diapositivas.length; i++){ //este for pone a todas las diapos ocultas
    diapositivas[i].style.display = "none";
 }
    diapositivas[indiceDiapo-1].style.display = "block"; //este menos uno hace que se vea la imagen desde la posicion 0

for (let i = 0; i< puntos.length; i++){ // hago lo mismo pero ahora con los puntitos
    puntos[i].className= puntos[i].className.replace(" activo", "") //aca le saco la clase activo a todos los puntos
    
}
    puntos[indiceDiapo-1].className+= " activo"; // defino que el punto activo sea el que se encuentra en la posicion de la diapo mostrada
    

    setTimeout( function(){
        mostrarDiapos(indiceDiapo+1)
    } , 6000) // esto es para que cada 6 segundos se llame a la funcion con el siguiente valor del indice

}  


function moverDiapo(n){ //defino la funcion que servira para que la diapo se mueva sola
    indiceDiapo = indiceDiapo+n; //le paso como parámeto un número, si suma un "n" avanza, si resta un "n" retrocede, n=1; o -1
    mostrarDiapos(indiceDiapo); //pido q me muestre la imagen 
}

function irAdiapo(n) {
    indiceDiapo = n; //cambia el indice de la imagen
    mostrarDiapos(indiceDiapo); //muestra la imagen en el indice nuevo ya recien guardado
}

