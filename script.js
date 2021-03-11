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
    console.log(selectedTask.className);
    selectedTask.classList.remove('selected');
    console.log(selectedTask.className);
    selectedTask = event.target;
  }
  selectedTask.classList.add('selected');
}

function markCompleted(event) {
  const testedTask = event.target;
  if (testedTask.className.includes('completed')) {
    testedTask.classList.remove('completed');
  } else {
    testedTask.classList.add('completed');
  }
  console.log(testedTask);
}

function addTask() {
  if (inputTask.value !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputTask.value;
    inputTask.value = '';
    task.addEventListener('click', markTask);
    task.addEventListener('dblclick', markCompleted);
    taskList.appendChild(task);    
  } else {
    alert('Insira o conteúdo da tarefa');
  }
}



// Bloco de criação de escutadores de eventos

buttonAddTask.addEventListener('click', addTask);

// Bloco de ações de inicialização da página
