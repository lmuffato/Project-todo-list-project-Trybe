// Bloco de inicialização de variáveis globais

const buttonAddTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
let selectedTask = null;

// bloco de declaração de funções

function markTask(event) {
  if (selectedTask === null) {
    selectedTask = event.target;
  } else if (event.target !== selectedTask) {
    selectedTask.className = 'task';
    selectedTask = event.target;
  }
  selectedTask.className = 'task selected';
}
function addTask() {
  if (inputTask.value !== '') {
    let task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputTask.value;
    inputTask.value = '';
    task.addEventListener('click', markTask);
    taskList.appendChild(task);    
  } else {
    alert('Insira o conteúdo da tarefa');
  }
}

// Bloco de criação de escutadores de eventos

buttonAddTask.addEventListener('click', addTask);

// Bloco de ações de inicialização da página
