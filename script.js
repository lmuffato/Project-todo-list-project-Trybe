const taskList = document.getElementById('lista-tarefa');

function createTask() {
  const taskName = document.getElementById('texto-tarefa');
  const elementTask = document.createElement('li');
  elementTask.innerHTML = taskName.value;
  taskList.appendChild(elementTask);
  taskName.value = '';
}
function selectedTask(newSelected) {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
    newSelected.target.classList.add('selected');
  } else {
    newSelected.target.classList.add('selected');
  }
}
function completedTask(completed) {
  if (completed.target.classList.contains('completed')) {
    completed.target.classList.remove('completed');
  } else {
    completed.target.classList.add('completed');
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
taskList.addEventListener('click', selectedTask);
taskList.addEventListener('dbclick', completedTask);
