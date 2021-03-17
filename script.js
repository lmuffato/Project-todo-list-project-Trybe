// Cria uma função que adiciona um elemento 'li' ao 'ol', e faz com que o .innerHTML
// Seja o valor do input com a ID 'texto-tarefa'

function createTask() {
  const taskAdd = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const taskName = document.getElementById('texto-tarefa');

  taskAdd.onclick = () => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskName.value;
    taskList.appendChild(taskItem);
  };
}

createTask();
