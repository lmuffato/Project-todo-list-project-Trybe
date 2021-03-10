function resetInput() {
  const ol = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.className = 'itens';
  item.innerText = document.getElementById('texto-tarefa').value;
  ol.appendChild(item);
  if (item !== '') {
    document.getElementById('texto-tarefa').value = '';
  }
  console.log(itemColor);
  item.addEventListener('click', changeColor);
}

function changeColor(item) {
  const colorize = item.target;
  colorize.style.backgroundColor = 'rgb(128, 128, 128)';
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', resetInput);
const itemColor = document.querySelector('#lista-tarefas');
