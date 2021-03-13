const taskBtn = document.getElementById('criar-tarefa');
const inputPlace = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

function addTask() {
  taskBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputPlace.value; 
    listTask.appendChild(li);
    inputPlace.value = '';
  });
}

addTask();
