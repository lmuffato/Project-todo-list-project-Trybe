const items = [];

function clearSelection() {
  const listLis = document.getElementsByClassName('item');
  for (let index = 0; index < listLis.length; index += 1) {
    listLis[index].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function selectItemList(e) {
  clearSelection();
  e.target.style.backgroundColor = 'rgb(128,128,128)';
}

function checkItem(e) {
  if (e.target.className === 'item') {
    e.target.className = 'item completed';
  } else {
    e.target.className = 'item';
  }
}

function addItemList() {
  const inputSearch = document.getElementById('texto-tarefa');
  const buttonSearch = document.getElementById('criar-tarefa');
  const listTodo = document.getElementById('lista-tarefas');

  buttonSearch.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerText = inputSearch.value;
    newLi.className = 'item';
    newLi.addEventListener('click', selectItemList);
    newLi.addEventListener('dblclick', checkItem);
    listTodo.appendChild(newLi);
    items.push(inputSearch.value);
    inputSearch.value = '';
  });
}

function clearListItens() {
  console.log(items);
  const allItens = document.getElementById('lista-tarefas');
  for (let index = allItens.children.length - 1; index >= 0; index -= 1) {
    allItens.children[index].remove();
    items.pop();
  }
  console.log(items);
}

function activeButtonClearAll() {
  const buttonClearAll = document.getElementById('apaga-tudo');
  buttonClearAll.addEventListener('click', clearListItens);
}

window.onload = () => {
  addItemList();
  activeButtonClearAll();
};
