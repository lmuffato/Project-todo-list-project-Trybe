const buttonTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');
const deleteAll = document.getElementById('apaga-tudo');
const getList = document.createElement('li');
const taskLi = document.getElementsByClassName('task');
const finish = document.getElementsByClassName('completed');
const buttonFinish = document.getElementById('remover-finalizados');

// REQUISITO 5 E 6 //

function addTask() {
  buttonTask.addEventListener('click', () => {
    getList.innerText = inputTask.value;
    getList.className = 'task';
    listTask.appendChild(getList);
    inputTask.value = '';
  });
}

// REQUISITO 7 E 8 //

function getGray() {
  listTask.addEventListener('click', (event) => {
    for (let index = 0; index < listTask.children.length; index += 1) {
      listTask.children[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// REQUISITO 9 //

function completeItem() {
  listTask.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
// toggle - para alternar para CLASS //

// REQUISITO 10//

function clearList() {
  deleteAll.addEventListener('click', () => {
    // listTask.children.remove(); //
    for (let index = 0; index < taskLi.length; index += 1) {
      taskLi[index].remove();
    }
  });
}

// REQUISITO 11 //

function finishedRemove() {
  buttonFinish.addEventListener('click', () => {
    if (finish.length != 0) {
      for (let index = 0; index < finish.length; index += 1) {
        finish[index].remove();
      }
    }
  });
}

window.onload = () => {
  addTask();
  getGray();
  completeItem();
  clearList();
  finishedRemove();
};
