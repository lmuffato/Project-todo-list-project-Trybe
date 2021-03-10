const listaDeTarefas = document.getElementById('lista-tarefas');
const buttonCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefa = document.getElementsByTagName('li');

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
  const taskChosen = listItem.target.style;

  if (taskChosen.textDecoration === 'solid') {
    taskChosen.textDecoration = 'line-through';
  } else {
    for (let index = 0; index < tarefa.length; index += 1) {
      tarefa[index].style.textDecoration = 'solid';
    }
  }
}

listaDeTarefas.addEventListener('dblclick', finishedOption);
listaDeTarefas.addEventListener('click', unselectOptions);
listaDeTarefas.addEventListener('click', selectOption);
