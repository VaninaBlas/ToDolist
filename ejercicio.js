let input = document.querySelector(".input")
let agregar= document.querySelector(".boton-agregar")
let container= document.querySelector(".container")

class Item{
    constructor(valor ){
        this.valor=valor
        this.crearDiv(valor)
    }
    crearDiv(valor){
        let inputitem=  document.createElement("input")
        inputitem.disabled='true'
        inputitem.type='text'
        inputitem.classList.add("item-input")
        inputitem.appendChild(valor)
        let div= document.createElement("id")
        div.classList.add("item")
        let botonEditar= document.createElement("button")
        botonEditar.innerHTML= "<i class='fa-solid fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
        let botonRemover= document.createElement("button")
        botonRemover.innerHTML="<i class='fa-solid fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
        div.appendChild(inputitem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)
    }
}
