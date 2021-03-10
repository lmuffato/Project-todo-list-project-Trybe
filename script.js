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