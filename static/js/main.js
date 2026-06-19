let btn = document.getElementById("add")

btn.addEventListener("click", () => {
    let novaTarefa = document.createElement("div")
    let tarefa = document.getElementById("textAdd").value
    let tarefaAdd = document.createElement("p")
    let tarefas = document.getElementById("tarefas")
    let semTarefa = document.getElementById("semTarefas")

    if (tarefa == ""){
        return
    } else if (semTarefa == null){
        
    } else {
        semTarefa.remove()
    }

    novaTarefa.classList.add("tarefa")
    tarefaAdd.textContent = tarefa
    novaTarefa.appendChild(tarefaAdd)
    
    let comTarefas = tarefas.appendChild(novaTarefa)

    comTarefas.classList.add("comTarefa")
    document.getElementById("textAdd").value = ""
})

