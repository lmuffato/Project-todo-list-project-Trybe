const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');

getButton.addEventListener("click", InsertTask);

function InsertTask () {
  let task = document.createElement("li")
  task.innerText = getInput.value; 
  getList.appendChild(task);

}

