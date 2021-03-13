function addNewTask() {
  const textTask = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const newList = document.createElement('li');
  if (textTask === '') {
      alert('Você deve adicionar uma tarefa')
  } else {
  taskList.appendChild(newList);
  newList.innerText = textTask;
  newList.style.backgroundColor = '';
  newList.addEventListener('click', function () {
    newList.classList.add('color')
  })
  }
}
const addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
  const textTask = document.querySelector('#texto-tarefa');
  textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);


