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

function selectedTask() {
  const allTasks = document.getElementsByClassName('all-tasks');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].addEventListener('click', (event) => {
      const selected = event.target;
      selected.className += ' selected';
  });
  }
}

selectedTask();

// window.onload = () => {
//   selectedTask();
// };

// function changeBackground(event) {
//   const selected = event.target;
//   const selectedTask = document.querySelectorAll('.selected');
//   selectedTask.forEach((element) => {
//       if (element !== target) {
//           target.classList.remove('selected');
//       }
//   });
//   target.classList.add('selected');
// }

// tasksList.addEventListener('click', changeBackground);

//   for (let index = 0; index < allTasks.length; index += 1) {
//     allTasks[index].addEventListener('click', (event) => {
//       const selected = event.target;
//       const selecionaCor = getComputedStyle(document.querySelector('.selected'));
//       selected.style.backgroundColor = selecionaCor.backgroundColor;
//     });
//   }