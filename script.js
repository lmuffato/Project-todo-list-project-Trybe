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

// function colorTask() {
//   let taskList = document.querySelector('#lista-tarefas');
//   taskList.addEventListener('click', function(event) {
//     let tasksCounter = document.getElementsByClassName('task');
//     for (let index = 0; index < tasksCounter.length; index += 1) {
//       if (tasksCounter[index].classList.contains('selected')) {
//         tasksCounter[index].style.backgroundColor = 'rgb(128,128,128)';
//       } else {
//         tasksCounter[index].style.backgroundColor = 'white';
//       }
//     }
//   })
// }
// colorTask();

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

function removeSelected() {
  let btn = document.createElement('button');
  btn.id = 'remover-selecionado';
  btn.innerText = 'X';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function() {
    let taskList = document.querySelector('#lista-tarefas');
    let selectedTask = document.querySelector('.selected');
    taskList.removeChild(selectedTask);
  })
}
removeSelected();

function deleteAllBtn() {
  let btn = document.createElement('button');
  btn.id ='apaga-tudo';
  btn.innerText = 'Limpar a lista';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function() {
    let taskList = document.getElementById('lista-tarefas');
    let tasks = document.getElementsByClassName('task');
    for(let index = tasks.length; index > 0; index -= 1) {
      taskList.removeChild(tasks[index-1]);
    }
  })
}
deleteAllBtn();

function deleteCompleteBtn() {
  let btn = document.createElement('button');
  btn.id = 'remover-finalizados';
  btn.innerText = 'Remove finalizados';
  document.getElementById('dinamic-session').appendChild(btn);
  btn.addEventListener('click', function() {
    let taskList = document.querySelector('#lista-tarefas');
    let completedTasks = document.querySelectorAll('.completed');
    for (let index = completedTasks.length; index > 0; index -= 1) {
      taskList.removeChild(completedTasks[index-1]);
    }
  })
}
deleteCompleteBtn();

function moveUp() {
  let btn = document.createElement('button');
  btn.id = 'mover-cima';
  btn.innerText = 'Cima';
  document.querySelector('#dinamic-session').appendChild(btn);
  btn.addEventListener('click', function() {
    let tasksList = document.querySelectorAll('.task');
    for (let index = 0; index < tasksList.length; index += 1) {
      if (tasksList[index].classList.contains('selected') && index !== 0) {
        tasksList[index].classList.remove('selected');
        tasksList[index-1].classList.add('selected');
        let aux = tasksList[index].innerText;
        tasksList[index].innerText = tasksList[index-1].innerText;
        tasksList[index-1].innerText = aux;
      }
    }
  })
  
}
moveUp();
