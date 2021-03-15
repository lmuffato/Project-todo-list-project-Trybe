const listaDeTarefas = document.getElementById('lista-tarefas');
const buttonCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefa = document.getElementsByTagName('li');
const clearButton = document.getElementById('apaga-tudo');
const clearFinished = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');

function returnInformation() {
  for (let index = 0; index < (localStorage.length / 3); index += 1) {
    const tarefas = document.createElement('li');
    tarefas.className = localStorage.getItem(`${index} class`);
    tarefas.innerHTML = localStorage.getItem(index);
    listaDeTarefas.appendChild(tarefas);
    listaDeTarefas.children[index].style.textDecoration = localStorage.getItem(`${index} style`);
  }
}

returnInformation();

function criarTarefa() {
  const tarefas = document.createElement('li');
  tarefas.className = 'tarefa';
  tarefas.innerHTML = textoTarefa.value;
  listaDeTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

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
  const taskChosen = listItem;
  const taskClass = listItem.target;
  if (taskChosen.target.style.textDecoration === '') {
    taskChosen.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    taskClass.className = 'completed';
  } else {
    taskChosen.target.style.textDecoration = '';
    taskClass.className = 'tarefa';
  }
}

function clearAll() {
  for (let index = tarefa.length - 1; index >= 0; index -= 1) {
    listaDeTarefas.lastChild.remove();
    localStorage.clear();
  }
}

function clearSelected() {
  for (let index = tarefa.length - 1; index >= 0; index -= 1) {
    if ((listaDeTarefas.children[index].className.indexOf('completed')) === 0) {
      listaDeTarefas.removeChild(tarefa[index]);
      localStorage.removeItem(index);
      localStorage.removeItem(`${index} class`);
      localStorage.removeItem(`${index} style`);
    }
  }
}

function saveInformation() {
  for (let index = 0; index < tarefa.length; index += 1) {
    localStorage.setItem(index, tarefa[index].innerHTML);
    localStorage.setItem(`${index} class`, tarefa[index].className);
    localStorage.setItem(`${index} style`, listaDeTarefas.children[index].style.textDecoration);
  }
}

buttonCriar.addEventListener('click', criarTarefa);
saveTasks.addEventListener('click', saveInformation);
clearFinished.addEventListener('click', clearSelected);
clearButton.addEventListener('click', clearAll);
listaDeTarefas.addEventListener('dblclick', finishedOption);
listaDeTarefas.addEventListener('click', unselectOptions);
listaDeTarefas.addEventListener('click', selectOption);
