function resetInput() {
  const ol = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  ol.appendChild(item);
  if (item !== '') {
    document.getElementById('texto-tarefa').value = '';
  }
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', resetInput);
