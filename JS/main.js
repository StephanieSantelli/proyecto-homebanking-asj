
/* let tabla = document.getElementById("cuerpoDeTablaDePrueba");
 */
let button = document.getElementById("cajita")

/* button.addEventListener("click", cajainvisible)
 */
let cajita = 0;


function cajainvisible(id){
   const caja = document.getElementById(id)
    if (caja.style.visibility === "hidden"){
        caja.style.visibility = "visible"
    } else {
        caja.style.visibility = "hidden"

    }
}

function reemplazo(){
    let registro = document.getElementById("usuarioIngreso");
    let nombreIngresado = prompt('Ingresá tu nombre');
    registro.innerHTML = nombreIngresado? "Bienvenido " + nombreIngresado: "Bienvenido";
     
}
   
   /*
     if (cajita == 0){
        caja.style.visibility = "hidden"
        cajita=1;
        console.log(cajita)

    }else {
        caja.style.visibility = "visible"
        cajita =0;
        console.log(cajita)

    }
} */



/* serv = document.getElementById("serv");

function cambiarS(){
    serv.style.visibility = "visible"
}
activ = document.getElementById("activ");

function cambiarA(){
    activ.style.visibility = "visible"
}
 */

















/* function recuperar(){
    document.getElementById('recupera-contra').innerText= '<p>Se ha enviado un correo electrónico de recuperación de contraseña. Verifique su casilla de mail</p>'

} */

/* const ejemploMovimientos = [
    {
        fecha: '18 junio 2022', 
        descripcion: 'Verdulería',
        monto: '$750,00',
        origen: 'debito-ars'
    },
    {
        fecha: '18 junio 2022', 
        descripcion: 'Verdulería',
        monto: '$750,00',
        origen: 'credito-ars'
    },
    {
        fecha: '18 junio 2022', 
        descripcion: 'Verdulería',
        monto: '$750,00',
        origen: 'debito-ars'
    },
    {
        fecha: '18 junio 2022', 
        descripcion: 'Verdulería',
        monto: '$750,00',
        origen: 'credito-ars'
    },
    {
        fecha: '18 junio 2022', 
        descripcion: 'Verdulería',
        monto: '$750,00',
        origen: 'debito-ars'
    },
    
]

function filtrarMovimientos(tipo='debito-ars'){
    const movimientos = ejemploMovimientos.filter((mov) => mov.origen===tipo);
    return movimientos
}

function crearTablaMov(tipo='debito-ars'){
    let tabla = document.getElementById('cuerpo-de-tabla')
    const movimientosTabla = filtrarMovimientos(tipo)
    console.log(movimientosTabla)
    let contenidoTabla = ''
    for (let i in movimientosTabla){
        const mov = movimientosTabla[i];
    const fila =  `<tr>
    <td>${mov.fecha}</td>
    <td>${mov.descripcion}</td>
    <td>${mov.monto}</td>
    </tr>`
        contenidoTabla = `${contenidoTabla} 
        ${fila}`;  
    }
    tabla.innerHTML= contenidoTabla
}

crearTablaMov() */


/* mis arreglos */

/* let tabla=document.querySelector('#cuerpo-de-tabla');
 for(let i = 0; i<4; i++){ 
let tr=document.createElement('tr');
let td=document.createElement('td');
td.innerText='18 junio 2022' + 'Verdulería ' + ' $750,00'
tabla.appendChild(tr);
tr.appendChild(td);
 }
 */

/* function mostrar(){
    visibility:hidden;
} */
 /* 



function mostrar(){
let tabla=document.querySelector('#cuerpo-de-tabla');
    tabla.innerText= ['18 junio 2022'
        {
            fecha: '18 junio 2022', 
            descripcion: 'Verdulería',
            monto: '$750,00',
            origen: 'debito-ars'
        },
        {
            fecha: '18 junio 2022', 
            descripcion: 'Verdulería',
            monto: '$750,00',
            origen: 'credito-ars'
        },
        {
            fecha: '18 junio 2022', 
            descripcion: 'Verdulería',
            monto: '$750,00',
            origen: 'debito-ars'
        },
        {
            fecha: '18 junio 2022', 
            descripcion: 'Verdulería',
            monto: '$750,00',
            origen: 'credito-ars'
        },
        {
            fecha: '18 junio 2022', 
            descripcion: 'Verdulería',
            monto: '$750,00',
            origen: 'debito-ars'
        },
        
    ]
    document.body.appendChild(tabla)} */

    /* video de youtube*/

    /* const formulario = document.getElementById('registro');
    const inputs = document.querySelectorAll('#registro input')
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
       
        // telefono: /^\d{7,25}$/ // 7 a 14 numeros.
    }

    const validarFormulario = (e) => {
        switch (e.target.name){
            case "nombre" :
                if(expresiones.nombre.test(e.target.value)){
                    document.getElementById('nombre').classList.remove('incorrecto');
                    document.getElementById('nombre').classList.add('correcto');
                }else {
                    document.getElementById('nombre').classList.add('incorrecto');
                }
            break;
            case "apellido" :

            break;
            case "edad" :

            break;
            case "documentos" :

            break;
            case "dni" :

            break;
            case "usuario" :

            break;
            case "email" :

            break;
            case "password" :

            break;
            case "psw-repeat" :

            break;

        }
    }

    inputs.forEach(() => { //funcion que se ejecuta por c/u de los inputs q hay
        input.addEventListener('keyup', validarFormulario); //le digo que le pongo un evento a los inputs, que es q avisa cuando un usuario deja de tocar una tecla
        input.addEventListener('blur', validarFormulario); // evento que cuando hace click afuera, avisa
    });


    registro.addEventListener('submit', (e) => { //agrego un evento, creo una funcion "e" de elemento, para utilizarla
    e.preventDefault(); // sin esto, se envian los datos sin validar
    });

 */