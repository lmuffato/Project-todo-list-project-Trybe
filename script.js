function addNewTask(){
  let textTask = document.querySelector('#texto-tarefa').value;
  let taskList = document.querySelector('#lista-tarefas')
  let newList = document.createElement('li');
  taskList.appendChild(newList);
  newList.innerText = textTask;    
}
let addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
    let textTask = document.querySelector('#texto-tarefa');
    textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);