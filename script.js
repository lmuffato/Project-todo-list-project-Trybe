const createTaskButton = document.getElementById('criar-tarefa');
const addTaskInput = document.getElementById('texto-tarefa');
const tasksList = document.getElementById('lista-tarefas');

function createTask() {
  if (addTaskInput.value !== '') {
    const newTask = document.createElement('li');
    newTask.classList.add('all-tasks');
    newTask.textContent = addTaskInput.value;
    tasksList.appendChild(newTask);
    addTaskInput.value = ''; 
    }
}

createTaskButton.addEventListener('click', createTask);
