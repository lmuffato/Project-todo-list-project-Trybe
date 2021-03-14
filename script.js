const buttonTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

// REQUISITO 7 //

function addTask() {
  buttonTask.addEventListener('click', () => {
    const getList = document.createElement('li');
    getList.innerText = inputTask.value;
    listTask.appendChild(getList);
    inputTask.value = '';
  });
}

window.onload = function () {
  addTask();
};
