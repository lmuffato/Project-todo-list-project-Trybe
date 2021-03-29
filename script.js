const taskbutton = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.querySelectorAll('lista-tarefas');
const listaDeTarefas = document.getElementById('lista-tarefas');
const eraseAll = document.getElementById('apaga-tudo');
const eraseCompleted = document.getElementById('remover-finalizados');

taskbutton.addEventListener('click', function() {
  const newtask = document.createElement('li');
  newtask.innerText = inputTarefa.value;
  listaDeTarefas.appendChild(newtask);
  inputTarefa.value = null;
});

function paintBackground(event) {
      for( let index = 0; index < listaTarefas.length; index += 1){
        listaTarefas[index].classList.remove('task-selection')
        }
      event.target.classList.add('task-selection');
}

function completedTAsk(event) {
  event.target.classList.add('completed');
}

listaDeTarefas.addEventListener('dblclick', completedTAsk);
listaDeTarefas.addEventListener('click', paintBackground);

eraseAll.addEventListener('click', function() {
  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
})
