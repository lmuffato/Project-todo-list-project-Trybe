const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');

function addTaskToList() {
  const newTask = document.createElement('li');
  const task = document.getElementById('texto-tarefa').value;
  newTask.innerText = task;
  taskList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

// Adicionar event listener no botão
addTaskBtn.addEventListener('click', addTaskToList);

taskList.addEventListener('click', (event) => {
  const clickedItem = event.target;
  const currentlySelectedItem = document.querySelector('.selected');
  if (currentlySelectedItem !== null) {
    // Remove a classe selected do item previamente selecionado e retira a cor de fundo
    currentlySelectedItem.classList.remove('selected');
    currentlySelectedItem.style.backgroundColor = '';
  }
  clickedItem.classList.add('selected');
  clickedItem.style.backgroundColor = 'rgb(128,128,128)';
});
