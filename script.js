const listaDeTarefas = document.getElementById('lista-tarefas');
const buttonCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefa = document.getElementsByTagName('li');
const clearButton = document.getElementById('apaga-tudo');
const clearFinished = document.getElementById('remover-finalizados')

function criarTarefa() {
  const tarefas = document.createElement('li');
  tarefas.className = 'tarefa';
  tarefas.innerHTML = textoTarefa.value;
  listaDeTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

buttonCriar.addEventListener('click', criarTarefa);

function selectOption(listItem) {
  const taskChosen = listItem.target;
  taskChosen.style.backgroundColor = 'rgb(128, 128, 128)';
}

function unselectOptions() {
  for (let index = 0; index < tarefa.length; index += 1) {
    tarefa[index].style.backgroundColor = 'white';
  }
}

function finishedOption(listItem) {
  let taskChosen = listItem;
  let taskClass = listItem.target;
  if (taskChosen.target.style.textDecoration === '') {
    taskChosen.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    taskClass.className += " finished"
  } else {
    taskChosen.target.style.textDecoration = '';
    taskClass.className = "tarefa"
  }
}

function clearAll() {
  for (let index = tarefa.length - 1; index >= 0; index -= 1) {
    listaDeTarefas.lastChild.remove();
  }
}

function clearSelected() {
    for (let index = tarefa.length - 1; index >= 0; index -= 1){
        if ((listaDeTarefas.children[index].className.indexOf('finished')) > 0){
           listaDeTarefas.removeChild(tarefa[index])
    } 
}
}

clearFinished.addEventListener('click', clearSelected)
clearButton.addEventListener('click', clearAll);
listaDeTarefas.addEventListener('dblclick', finishedOption);
listaDeTarefas.addEventListener('click', unselectOptions);
listaDeTarefas.addEventListener('click', selectOption);