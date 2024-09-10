let input = document.querySelector(".input")
let agregar= document.querySelector(".boton-agregar")
let container= document.querySelector(".container")

class Item{
    constructor(valor ){
        this.crearDiv(valor)
    }
    crearDiv(valor){
        let inputitem=  document.createElement("input")
        inputitem.disabled='true'
        inputitem.type='text'
        inputitem.classList.add("item-input")
        inputitem.appendChild(valor)
        let div= document.createElement("id")
        div.appendChild(inputitem)
        div.classList.add("item")
    }
}