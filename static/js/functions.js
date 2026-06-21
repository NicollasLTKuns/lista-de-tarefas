export function criarTarefa(){
    let novaTarefa = document.createElement("div")
    let tarefa = document.getElementById("textAdd").value
    let tarefaAdd = document.createElement("p")
    let tarefas = document.getElementById("tarefas")
    let semTarefa = document.getElementById("semTarefas")
    let contagemAtivas = document.getElementById("contagemAtivas")

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

    comTarefas.classList.add("tarefasAtivas")

    let excluir = document.createElement("button")
    let img = document.createElement("img")
    img.src = "../static/img/lixeira.png"
    excluir.appendChild(img)
    excluir.classList.add("btnExcluir")
    excluir.addEventListener("click", function () {
        novaTarefa.remove();
        const tarefasAtivas = document.querySelectorAll(".tarefasAtivas").length;
        contagemAtivas.textContent = tarefasAtivas;
        if (tarefasAtivas === 0) {
            tarefas.appendChild(semTarefa);
        }
    });
    let ativas = document.querySelectorAll(".tarefasAtivas")
    let tarefasAtivas = ativas.length
    comTarefas.appendChild(excluir);

    contagemAtivas.textContent = tarefasAtivas

    document.getElementById("textAdd").value = ""
}