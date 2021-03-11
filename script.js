function addNewTask() {
  const textTask = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const newList = document.createElement('li');
  taskList.appendChild(newList);
  newList.innerText = textTask;
  newList.style.backgroundColor = 'white'
}
const addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
  const textTask = document.querySelector('#texto-tarefa');
  textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);

function changeBackgroundColor() {
    let textList = document.querySelectorAll('li');
    for (let index = 0; index < textList.length; index += 1) {
      textList[index].addEventListener('click', function (event) {
        let selectedItem = event.target;
        let selectedColor = 'rgb(128,128,128)';
        selectedItem.style.backgroundColor = selectedColor;
      });  
    }
  }
  changeBackgroundColor();



