import {criarTarefa} from './functions.js'

document.addEventListener("DOMContentLoaded", () =>{
    let btn = document.getElementById("add")
    let text = document.getElementById("textAdd")

    if (btn){
        btn.addEventListener("click", criarTarefa)
    }
    
    text.addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
            criarTarefa()
        }
    })
})