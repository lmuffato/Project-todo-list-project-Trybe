function setTask() {
  const tagLi = document.createElement('li');
  tagLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', setTask);

function clickColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

document.getElementById('lista-tarefas').addEventListener('click', clickColor);
