const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByTagName('li');
const killAllListButton = document.getElementById('apaga-tudo');
const killCompletedButton = document.getElementById('remover-finalizados');
const saveTaskListButton = document.getElementById('salvar-tarefas');
let addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addTask);
window.onload=getList();
function addTask() {
  let listContent = document.getElementById('texto-tarefa');
  if (listContent.value == '') {
    alert('Favor, preencher a caixa de texto!');
  } else {
    let newListItem = document.createElement('li');
    newListItem.innerText = listContent.value;
    taskList.appendChild(newListItem);
    listContent.value = '';
  }
}

document.body.addEventListener('click', clickSelected);
document.body.addEventListener('dblclick', doubleClickSelected);
killAllListButton.addEventListener('click', killAll);
killCompletedButton.addEventListener('click', killCompleted);
saveTaskListButton.addEventListener('click', saveList);
function clickSelected(e) {
  let hasAnotherSelect = classRepeatChecker(tasks);
  for (let index = 0; index < tasks.length; index += 1) {
    if (e.target == tasks[index] && hasAnotherSelect == false) {
      tasks[index].classList.add('selected');
    } else if (e.target == tasks[index] && hasAnotherSelect == true) {
      let x = document.getElementsByClassName('selected');
      for (let ondex = 0; ondex < x.length; ondex++) {
        x[ondex].classList.remove('selected');
      }
      tasks[index].classList.add('selected');
    }
  }
}

function classRepeatChecker(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].className.includes('selected') == true) {
      counter += 1;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}

function doubleClickSelected(e) {
  for (let index = 0; index < tasks.length; index += 1) {
    if (e.target == tasks[index]) {
      if (tasks[index].className.includes('completed') != true) {
        tasks[index].classList.add('completed');
      } else {
        tasks[index].classList.remove('completed');
      }
    }
  }
}

function killAll() {
  let lastOne;
  while (taskList.children.length != 0) {
    lastOne = taskList.lastChild;
    taskList.removeChild(lastOne);
  }
  localStorage.clear("list")
}

function killCompleted() {
  let completed = document.getElementsByClassName('completed');
  if (completed[0] != 'undefined') {
    let last = completed.length - 1;
    while (last >= 0) {
      taskList.removeChild(completed[last]);
      last = completed.length - 1;
    }
  }
}

function saveList() {
  let taskSaved = [];
  if (tasks.length > 0) {
    for (let index = 0; index < tasks.length; index++) {
      let task = {
        indice: index,
        value: tasks[index].textContent,
      };
      taskSaved.push(task);
    }
    localStorage.setItem('list', JSON.stringify(taskSaved));
  }
}

function getList() {
  if(localStorage.getItem("list")!=null){
    lists = JSON.parse(localStorage.getItem("list"));
    for (let index = 0; index < lists.length; index+=1) {
      let listItemRequested = document.createElement('li');
      listItemRequested.innerText = lists[index].value;
      taskList.appendChild(listItemRequested);
    }
  }
}