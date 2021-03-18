const createTaskButton = document.getElementById("criar-tarefa");
const taskList = document.querySelector('#lista-tarefas');

createTaskButton.addEventListener('click', function() {
  const input = document.getElementById('texto-tarefa');
  const inputTask = input.value;
  if (inputTask.length > 0) {
    let taskListItem = document.createElement('li');
    taskListItem.innerText = inputTask;
    taskList.appendChild(taskListItem);
    input.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i] !== e.target) {
      taskList.children[i].style.backgroundColor = document.body.style.backgroundColor;
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
});

taskList.addEventListener('dblclick', (e) => {
  const targetEvent = e.target;
  if (targetEvent.className !== 'completed') {
    targetEvent.className = 'completed';
  } else {
    targetEvent.className = 'no-completed'
  }
});




