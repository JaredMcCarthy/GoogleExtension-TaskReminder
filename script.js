
// Primeras instrucciones
//estos se llaman para saber que caztegoria son cada tarea


let addBtn = document.getElementById("btn-agregar")
let addText = document.getElementById("input-text")
let addDate = document.getElementById("input-date")


let datosInyectados = document.getElementById("data-inyection")

let idCount = 0

let datosUsuario = {
    id: 1,
    texto: addText,
    fecha: addDate,
}



addBtn.addEventListener('click', e => {
    e.preventDefault();
    datosInyectados.textContent = datosUsuario.id + " " + datosUsuario.texto.value + " "  + datosUsuario.fecha.value

    //limpiamos los inputs del user
    addText.value = ' '
    addDate.value = ' '
})