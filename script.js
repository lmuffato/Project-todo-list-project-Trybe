function addTask() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    let inputText = document.querySelector('input').value;
    let task = document.createElement('li');
    task.className = 'task';
    task.innerText = inputText;
    document.querySelector('#lista-tarefas').appendChild(task)
    document.querySelector('input').value = null;
  })
}

addTask();

function selectTask() {
  let taskList = document.querySelector('#lista-tarefas');
  
  taskList.addEventListener('click', function(event) {
    event.target.classList.add('selected');
    let allLines = document.querySelectorAll('li');
    for (let index = 0; index < allLines.length; index += 1) {
      if (allLines[index] !== event.target) {
        allLines[index].classList.remove('selected');
      }
    }
  })
}
selectTask();

function colorTask() {
  let taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', function(event) {
    let tasksCounter = document.getElementsByClassName('task');
    for (let index = 0; index < tasksCounter.length; index += 1) {
      if (tasksCounter[index].classList.contains('selected')) {
        tasksCounter[index].style.backgroundColor = 'rgb(128,128,128)';
      } else {
        tasksCounter[index].style.backgroundColor = 'white';
      }
    }
  })
}
colorTask();

function completeTask() {
  let taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('task')) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  })
  let tasksCounter = document.getElementsByClassName('task');
    for (let index = 0; index < tasksCounter.length; index += 1) {
      if (tasksCounter[index].classList.contains('completed')) {
        tasksCounter[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)'
      }
    }
}
completeTask();

