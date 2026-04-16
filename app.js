const inputs = JSON.parse(localStorage.getItem("url"))||[]
const inputs1 = JSON.parse(localStorage.getItem("nombre"))||[]
function guardar() {
    let input1 = document.getElementById("input1").value
    let input = document.getElementById("input").value
    let lista = document.getElementById("lista")
    let crear_li=document.createElement("li")
    let crear_img= document.createElement("img")
    crear_li.textContent = input1
    crear_img.src = input
    lista.appendChild(crear_li)
    lista.appendChild(crear_img) 
    inputs.push(input)
    inputs1.push(input1)
    localStorage.setItem("nombre", JSON.stringify(inputs1))
    localStorage.setItem("url", JSON.stringify(inputs))
}

window.onload = (e)=>{
    let lista = document.getElementById("lista")
    let nombres = JSON.parse(localStorage.getItem('nombre')) || []
    let urls = JSON.parse(localStorage.getItem('url')) || []
    for(let i = 0; i < urls.length; i++){
        let crear_li = document.createElement('li')
        crear_li.textContent = nombres[i] || ''
        let crear_img = document.createElement('img')
        crear_img.src = urls[i]
        crear_li.appendChild(crear_img) 
        lista.appendChild(crear_li)
    }
}
function borrar() {
    localStorage.clear()
    const lista = document.getElementById('lista')
    lista.innerText = ''
    lista.src=''
}