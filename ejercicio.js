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
        inputitem.disabled=true
        inputitem.type='text'
        inputitem.value=valor
        let div= document.createElement("div")
        inputitem.setAttribute("class", "item-input")
        div.classList.add("item")
        let botonEditar= document.createElement("button")
        botonEditar.innerHTML= "<i class='fa-solid fa-lock'></i>"
        let botonRemover= document.createElement("button")
        botonRemover.setAttribute("class", "boton-remover")
        botonEditar.setAttribute("class", "boton-editar")
        botonRemover.innerHTML="<i class='fa-solid fa-trash'></i>"
        div.appendChild(inputitem)
        div.appendChild(botonEditar)
        div.appendChild(botonRemover)
        container.appendChild(div)
        botonEditar.addEventListener("click", function(){
            
            if(inputitem.disabled){
                inputitem.disabled=false
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
            }
            else{
                inputitem.disabled=true

                botonEditar.innerHTML= "<i class='fa-solid fa-lock'></i>"
            }
            
        })
        botonRemover.addEventListener("click", function () {
            container.removeChild(div);
        });
    }
}
function chequearInput(){
    if(input.value != ""){
        let obj=new Item(input.value)
        input.value=""                                                    
    }
}
agregar.addEventListener("click", function(){
    chequearInput()
})