let listaDeTarefas = document.getElementById('lista-tarefas')
let buttonCriar = document.getElementById('criar-tarefa')
let textoTarefa = document.getElementById('texto-tarefa')

function criarTarefa() {
  let tarefas = document.createElement("li");
  tarefas.className = "tarefa";
  tarefas.innerHTML = textoTarefa.value;
  listaDeTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

buttonCriar.addEventListener('click', criarTarefa);
