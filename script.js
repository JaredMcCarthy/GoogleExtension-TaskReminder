
// Primeras instrucciones
//id que llamamos desde html para usarlos aqui
let addBtn = document.getElementById("btn-agregar")
let addText = document.getElementById("input-text")
let addDate = document.getElementById("input-date")


//me gusto mas la variable que dijo marce
let listaTareas = document.getElementById("lista-tareas")

//variable inicia para aumentar el id
let idActual = 1

//variable donde se guardan los datos
datos = { 
    texto: addText,
    fecha: addDate
}

//necesitamos los arrays para guardar datos con push hacia el html
let tareasP = []
let tareasC = []
let todasTareas = []

addBtn.addEventListener('click', e => {

    let datosUsuario = {
        id: idActual,
        texto: addText.value,
        fecha: addDate.value,
        estado: false
    }

    todasTareas(datosUsuario)
    //limpiamos los inputs del user
    addText.value = '';
    addDate.value = '';

    
    e.preventDefault();
    //aqui llamamos a la variable directa usando los del inicio con el value para llamar la info del input
    let nuevaTarea = idActual++ + " " + datos.texto.value + " " + datos.fecha.value. //faltaba HACER EL INNER TEXT
    listaTareas.textContent = nuevaTarea

    console.log(typeof nuevaTarea)
    console.log(nuevaTarea)


    //metemos a la nuevaTarea los datos guardados en las variables P y nuevas
    todasTareas.push(nuevaTarea)

    //llamamos al presionar el boton la funcion de abajo que ordena los datos hacia abajo
    mostrar(todasTareas)
})

function mostrar(lista) {
    var ul = document.getElementById("lista-tareas")

    ul.innerHTML = '';
    for (let i = 0; i < lista.length; i++) {

        //aqui se crea un elemento para una lista li para el html
        var li = document.createElement("li")

        li.appendChild(document.createTextNode(lista[i]))

        ul.appendChild(li)

    }
}

let miArray = [];
console.log(miArray);

let objeto1 = { texto: "comprar leche" };
miArray.push(objeto1);
console.log(miArray);

let objeto2 = { texto: "llamar a mamá" };
miArray.push(objeto2);
console.log(miArray);

console.log(miArray.length);
console.log(miArray[0]);
console.log(miArray[0].texto);


console.log(addText);
console.log(addText.value);