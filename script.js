
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
    idActual,
    texto: addText,
    fecha: addDate,
    estado: false
}

//necesitamos los arrays para guardar datos con push hacia el html
let tareasP = []
let tareasC = []
let todasTareas = []

addBtn.addEventListener('click', e => {
    console.log("Boton si funciona")

    //Ambos se van a quedarvacios al presionar
    addText.value = '';
    addDate.value = '';

    listaTareas.textContent = idActual + "" + datos.addText + " " + datos.addDate
    console.log(todasTareas)

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

// let miArray = [];
// console.log(miArray);

// let objeto1 = { texto: "comprar leche" };
// miArray.push(objeto1);
// console.log(miArray);

// let objeto2 = { texto: "llamar a mamá" };
// miArray.push(objeto2);
// console.log(miArray);

// console.log(miArray.length);
// console.log(miArray[0]);
// console.log(miArray[0].texto);


// console.log(addText);
// console.log(addText.value);