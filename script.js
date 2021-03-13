function addNewTask() {
  const textTask = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const newList = document.createElement('li');
  if (textTask === '') {
    alert('Você deve adicionar uma tarefa');
  } else {
    taskList.appendChild(newList);
    newList.innerText = textTask;
    newList.style.backgroundColor = '';
    newList.addEventListener('click', function () {
      clearBgColor();
      newList.classList.add('color');
      newList.addEventListener('dblclick', function () {
        newList.classList.toggle('completed'); // Toggle - habilita e desabilita o parâmetro atribuído. 
       
    });
    });
  }
}
const addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
  const textTask = document.querySelector('#texto-tarefa');
  textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);

function clearBgColor() {
  const coloredBg = document.querySelectorAll('.color');
  for (let index = 0; index < coloredBg.length; index += 1) {
    coloredBg[index].classList.remove('color');
  }
}
