function addNewTask() {
  const textTask = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const newList = document.createElement('li');
  taskList.appendChild(newList);
  newList.innerText = textTask;
  newList.style.backgroundColor = ''
}
const addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
  const textTask = document.querySelector('#texto-tarefa');
  textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);

function changeBackgroundColor() {
    let textList = document.querySelectorAll('#lista-tarefas > li');
    for (let index = 0; index < textList.length; index += 1) {
     textList[index].style.backgroundColor = 'red';
    }
  }
  changeBackgroundColor();

function setListColor() {
    let textList = document.querySelectorAll('#lista-tarefas > li');
    for (let index = 0; index < textList.length; index += 1) {
        textList.addEventListener('click', changeBackgroundColor);
    }
}
setListColor();

