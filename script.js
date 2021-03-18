// adiciona tarefas
function addTask() {
  const button = document.querySelector('button');
  button.addEventListener('click', function () {
    const textInputted = document.querySelector('input').value;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerText = textInputted;
    document.querySelector('#lista-tarefas').appendChild(task);
    document.querySelector('input').value = null;
  });
}
