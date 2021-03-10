function addTask() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    let inputText = document.querySelector('input').value;
    let task = document.createElement('li');
    task.innerText = inputText;
    document.querySelector('#lista-tarefas').appendChild(task)
    document.querySelector('input').value = null;
  })
}

addTask();

function selectTask() {
  let taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', function(event) {
    event.target.className = 'selected';
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
  taskList.addEventListener('click', function() {
    let allLines = document.querySelectorAll('li');
    for (let index = 0; index < allLines.length; index += 1) {
      if (allLines[index].className === 'selected') {
        allLines[index].style.backgroundColor = 'rgb(128,128,128)';
      } else {
        allLines[index].style.backgroundColor = 'white';
      }
    }
  })
}
colorTask();
