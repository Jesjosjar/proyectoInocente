let tareas = JSON.parse(localStorage.getItem('tareas')) || []
let historialAcciones = []

function crear(tarea) {
    tareas.push(tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
    prepararDeshacerCrear(tarea)
}

function prepararDeshacerCrear(tarea) {
    let undoObject = {
        fun: deshacerCrear,
        data: [tareas.length, tarea] 
    }
    historialAcciones.push(undoObject)
}

function deshacerCrear(data) {
    tareas.pop()
    localStorage.setItem('tareas', JSON.stringify(tareas))
}


function eliminar(idTarea) {
    prepararDeshacerEliminar(idTarea)
    tareas.splice(idTarea, 1)
    localStorage.setItem('tareas', JSON.stringify(tareas))
}


function prepararDeshacerEliminar(idTarea) {
    let undoObject = {
        fun: deshacerEliminar,
        data: [idTarea, tareas[idTarea]]
    }
    historialAcciones.push(undoObject)
}

function deshacerEliminar(data) {
    tareas.splice(data[0], 0, data[1])
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

function deshacer() {
    let undoObject = historialAcciones[historialAcciones.length - 1]
    historialAcciones.pop()
    undoObject.fun(undoObject.data)
    console.log(historialAcciones[historialAcciones.length - 1].data[1])
}

//parte visual
window.onload = () => {
    let ul_tareas = document.getElementById('ul_tareas')
    let tareas = JSON.parse(localStorage.getItem('tareas')) || []
    ul_tareas.innerHTML = ''
    for (let i in tareas) {
        let li = document.createElement('li')
        li.textContent = tareas[i]
        let button = document.createElement('button')
        button.textContent = 'Eliminar'
        button.onclick = () => btnEliminar(i)
        li.appendChild(button)
        ul_tareas.appendChild(li)

    }
}

function btnCrear() {
    let input_tarea = document.getElementById('input_tarea')
    let ul_tareas = document.getElementById('ul_tareas')
    let li = document.createElement('li')
    crear(input_tarea.value)

    li.textContent = input_tarea.value
    ul_tareas.appendChild(li)
    input_tarea.value = ''

    window.onload()
}

function btnDeshacer() {
    deshacer()
    
    window.onload()
}

function btnEliminar(i){
    eliminar(i)

    window.onload()
}
