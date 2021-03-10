const taskListItemClass = 'task-list-item';
function addTaskToList() {
  const ol = document.getElementById('lista-tarefas');
  const btnAddTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', () => {
    if (inputText.value.length > 0) {
      const li = document.createElement('li');
      li.innerHTML = inputText.value;
      li.className = taskListItemClass ;
      ol.appendChild(li);
      inputText.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}

function selectedTask() {
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('click', (e) => {
    if (e.target.className === taskListItemClass) {
      const selected = document.querySelector('.selected');
      if (selected !== null) {
        selected.className = taskListItemClass;
        e.target.className = 'task-list-item selected';
      } else {
        e.target.className = 'task-list-item selected';
      }
    }
  });
}

window.onload = () => {
  addTaskToList();
  selectedTask();
};
