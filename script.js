/**
 * Consultei o repositório do Daniel Ribeiro para resolver essa parte.
 * Link: https://github.com/tryber/sd-010-a-project-todo-list/tree/defauth98-todo-list-project
 */
function addTask() {
  const btnTask = document.querySelector('#criar-tarefa');

  btnTask.onclick = () => {
    const taskList = document.querySelector('#lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');
    const taskItem = document.createElement('li');

    taskItem.className = 'task';
    taskItem.innerText = inputTask.value;
    inputTask.value = '';
    taskList.appendChild(taskItem);
  };
}

addTask();

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/tree/felipemuller20-todo-list-project */
function deleteAllItems() {
  const btnDeleteAll = document.querySelector('#apaga-tudo');

  btnDeleteAll.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    const taskItem = document.getElementsByClassName('task');

    for (let index = taskItem.length; index > 0; index -= 1) {
      taskList.removeChild(taskItem[index - 1]);
    }
  });
}

deleteAllItems();
