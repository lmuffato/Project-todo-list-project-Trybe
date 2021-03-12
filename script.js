const list = {
  data: [''],
  lengthData: 0,
};

function listText() {
  const makelist = document.getElementById('lista-tarefas');
  const pushList = document.createElement('li');
  for (let index = 0; index < list.data.length; index += 1) {
    pushList.innerHTML = list.data[index];
    makelist.appendChild(pushList);
  }
}

function pullText() {
  const text = document.getElementById('texto-tarefa');
  list.data[list.lengthData] = (text.value);
  text.value = '';
  list.lengthData += 1;
  listText();
}

function listButton() {
  const click = document.getElementById('criar-tarefa');
  click.addEventListener('click', pullText);
}

function init() {
  listButton();
}
window.onload = init;
