/**
 * Consultei o repositório do Daniel Ribeiro para resolver essa parte.
 * Link: https://github.com/tryber/sd-010-a-project-todo-list/tree/defauth98-todo-list-project
 */
const addTask = () => {
  const btnTask = document.querySelector('#criar-tarefa');

  btnTask.onclick = () => {
    const taskList = document.getElementById('lista-tarefas');
    const inputTask = document.querySelector('#texto-tarefa');
    const taskItem = document.createElement('li');

    taskItem.className = 'task';
    taskItem.innerText = inputTask.value;
    inputTask.value = '';
    taskList.appendChild(taskItem);
  };
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/tree/renzosev-todo-list-project */
const completedItem = () => {
  const taskList = document.getElementById('lista-tarefas');

  taskList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
};

const selectItemList = () => {
  const taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    } else {
      e.target.classList.add('selected');
    }
  });
};

/** Source: https://github.com/tryber/sd-010-a-project-todo-list/tree/felipemuller20-todo-list-project */
const deleteAllItems = () => {
  const btnDeleteAll = document.querySelector('#apaga-tudo');

  btnDeleteAll.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    const completedTasks = document.querySelectorAll('.completed');
    for (let index = completedTasks.length; index > 0; index -= 1) {
      taskList.removeChild(completedTasks[index - 1]);
    }
  });
};

window.onload = () => {
  addTask();
  deleteAllItems();
  completedItem();
  selectItemList();
};
