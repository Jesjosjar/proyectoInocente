var datos = JSON.parse(localStorage.getItem("datos")) || []
window.onload = ()=>{
    let lista = document.getElementById("lista")
    
    for(let i = 0; i < datos.length; i++){
        let li = document.createElement('li')
        li.textContent = datos[i]
        lista.appendChild(li)
    }
}
function guardar() {
    let input = document.getElementById('input').value
    let lista = document.getElementById('lista')
    let li = document.createElement('li')
    li.textContent = input
    lista.appendChild(li)
    datos.push(input)
    localStorage.setItem("datos", JSON.stringify(datos))
}
function deshacer() {
    let lista = document.getElementById('lista')
    datos.pop()
    localStorage.setItem("datos", JSON.stringify(datos))
    lista.removeChild(lista.lastChild)
    
    console.log(datos[datos.length - 1] || "No hay datos guardados")

}
