const list = {
  data: [''],
  lengthData: 0,
};

function clickRemove() {
  for (let index = 0; index < list.data.length; index += 1) {
    const listLi = document.getElementsByTagName('li')[index];
    listLi.style.background = 'white';
  }
}

function clickList(e) {
  clickRemove();
  e.target.style.setProperty('background', 'rgb(128,128,128)');
}

function doubleClick(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function listText() {
  const makelist = document.getElementById('lista-tarefas');
  const pushList = document.createElement('li');
  for (let index = 0; index < list.data.length; index += 1) {
    pushList.innerHTML = list.data[index];
    pushList.className = 'text-list';
    makelist.appendChild(pushList);
    pushList.addEventListener('click', clickList);
    pushList.addEventListener('dblclick', doubleClick);
  }
}

function pullText() {
  const text = document.getElementById('texto-tarefa');
  list.data[list.lengthData] = (text.value);
  text.value = '';
  list.lengthData += 1;
  listText();
}

function removeList() {
  const makelist = document.getElementById('lista-tarefas');
  const removeText = document.querySelectorAll('.text-list');
  console.log(removeText.length);
  for (let index = 0; index < removeText.length; index += 1) {
    makelist.removeChild(removeText[index]);
    list.data.pop();
    list.lengthData -= 1;
  }
  console.log(list.data);
  console.log(list.lengthData);
}

function listButton() {
  document.getElementById('criar-tarefa').addEventListener('click', pullText);
  document.getElementById('apaga-tudo').addEventListener('click', removeList);
}

function init() {
  listButton();
}
window.onload = init;
