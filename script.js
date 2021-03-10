function addTaskToList() {
  const ol = document.getElementById('lista-tarefas');
  const btnAddTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', () => {
    if (inputText.value.length > 0) {
      const li = document.createElement('li');
      li.innerHTML = inputText.value;
      li.className = 'task-list-item'
      ol.appendChild(li);
      inputText.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}

function selectedTask() { 
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('click', (event) => {
      if (event.target.className === 'task-list-item') {
        const selected = document.querySelector('.selected');
        if (selected !== null) {
          selected.className = 'task-list-item'
          event.target.className = 'task-list-item selected';
        } else {
          event.target.className = 'task-list-item selected'
        }
    } 
  });
}

window.onload = () => {
  addTaskToList();
  selectedTask();
};
