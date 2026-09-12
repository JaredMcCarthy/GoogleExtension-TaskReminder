
// Primeras instrucciones
//estos se llaman para saber que caztegoria son cada tarea


const todoUser = document.getElementById("idTodos")
const pendUser = document.getElementById("idPendientes")
const compUser = document.getElementById("idCompletos")


// Ambos son los inputs que llamamos cuando el usuario ingresa
const userText = document.getElementById("input-text");
const userDate = document.getElementById("input-date");


// Este es el boton que llamamos cuando se presiona agregar tarea
let botonAgregar = document.getElementById("btn-agregar");


//Aqui es donde se inyectan los nuevos datos
let nuevosDatos = document.getElementById("inyeccionDatos")


let datosUsuario = {
    id: 1,
    texto: userText,
    fecha: userDate,
    estado: "Incompleto"
}

let contador = 1;

function agregarTarea() {
    botonAgregar.addEventListener('click', () => {
    nuevosDatos.textContent = contador++ + " " + datosUsuario.texto.value + " " + datosUsuario.fecha.value + " " + datosUsuario.estado

})

}
