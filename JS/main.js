

let button = document.getElementById("cajita")

let cajita = 0;

let idBotonActivo = "caja-pesos"

function cajainvisible(boton, id) {
    
    const botonPrevio = document.getElementById(idBotonActivo)
    botonPrevio.className = botonPrevio.className.replace(' active','')

    idBotonActivo = boton.id

    boton.className += ' active';
    
    const tablas = document.getElementsByClassName("secciontabla")
    for (let i = 0; i < tablas.length; i++) {
        tablas[i].style.display = "none"
    }

    const caja = document.getElementById(id)
    if (caja.style.display === "none" || !caja.style.display) {
        caja.style.display = "flex";
    } else {
        caja.style.display = "none";
    }
}

/* onclick="reemplazo()" */
//jQuery

$('#usuarioIngreso').click(reemplazo)
function reemplazo() {
    let nombreIngresado = prompt('Ingresá tu nombre');
    $(this).text(nombreIngresado ? "Bienvenido " + nombreIngresado : "Bienvenido");
}

/* slider*/

let indiceDiapo = 1;

mostrarDiapos(indiceDiapo) /* llamo la funcion que muestra la diapo en el indiceDiapo*/

function mostrarDiapos(n) { /* defino la funcion que muestra la diapo. el 'n' es indice de la imagen*/
    let diapositivas = document.getElementsByClassName("diapos"); /*cargo las diapo desde el html*/
    let puntos = document.getElementsByClassName("punto"); /*cargo los puntitos del htmb*/
    if (n > diapositivas.length) {
        indiceDiapo = 1;
    } else if (n < 1) {
        indiceDiapo = diapositivas.length; //este if, se ocupa de que los indices estén correctos
    } else {
        indiceDiapo = n;
    }

    for (let i = 0; i < diapositivas.length; i++) { //este for pone a todas las diapos ocultas
        diapositivas[i].style.display = "none";
    }
    diapositivas[indiceDiapo - 1].style.display = "block"; //este menos uno hace que se vea la imagen desde la posicion 0

    for (let i = 0; i < puntos.length; i++) { // hago lo mismo pero ahora con los puntitos
        puntos[i].className = puntos[i].className.replace(" activo", "") //aca le saco la clase activo a todos los puntos

    }
    puntos[indiceDiapo - 1].className += " activo"; // defino que el punto activo sea el que se encuentra en la posicion de la diapo mostrada

}
setInterval(function () {
    moverDiapo(1)
}, 6000) // esto es para que cada 6 segundos se llame a la funcion con el siguiente valor del indice

function moverDiapo(n) { //defino la funcion que servira para que la diapo se mueva sola
    indiceDiapo = indiceDiapo + n; //le paso como parámeto un número, si suma un "n" avanza, si resta un "n" retrocede, n=1; o -1
    mostrarDiapos(indiceDiapo); //pido q me muestre la imagen 
}

function irAdiapo(n) {
    indiceDiapo = n; //cambia el indice de la imagen
    mostrarDiapos(indiceDiapo); //muestra la imagen en el indice nuevo ya recien guardado
}

//validacion formulario:


function validarTiempoReal(e, ids) {

    const diccionarioExpresionRegular = {
        "usuario": /^\d{7,25}$/,
        "pass-ingreso": /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "nombre": /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        "apellido": /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        "edad": /^\d{0,10}$/,
        "documento": /^\d{7,25}$/,
        "email": /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "password": /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "psw-repeat": /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "usuario2": /^\d{7,25}$/,
        "email2": /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        let input = document.getElementById(id)
        let valorInput = input.value; // aca se guarda lo que ingresa el usuario
        let patrones = diccionarioExpresionRegular[id];
        if (patrones.test(valorInput)) {
            input.style.border = "3px solid green"
                      
            if (['pass-ingreso', 'password', 'psw-repeat'].includes(id)){
                input.setCustomValidity('')
            }
        } else {
            e.preventDefault(); //evita que se envie el formulario con datos erroneos
            input.style.border = "3px solid red"

            /* alert("error")*/
            if (['pass-ingreso', 'password', 'psw-repeat'].includes(id)) {
                input.reportValidity()
            } 
            return false
        }
    } return true


}
















