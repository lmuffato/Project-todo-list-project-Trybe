const items = [];
const idInput = 'texto-tarefa';
const idOrderList = 'lista-tarefas';

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

function addFromButton() {
  const inputSearch = document.getElementById(idInput);
  const listTodo = document.getElementById(idOrderList);

  const newLi = document.createElement('li');
  newLi.innerText = inputSearch.value;
  newLi.className = 'item';
  newLi.addEventListener('click', selectItemList);
  newLi.addEventListener('dblclick', checkItem);
  listTodo.appendChild(newLi);
  items.push(inputSearch.value);
  inputSearch.value = '';
}

function addFromEnter(e) {
  const listTodo = document.getElementById(idOrderList);

  const newLi = document.createElement('li');
  newLi.innerText = e.target.value;
  newLi.className = 'item';
  newLi.addEventListener('click', selectItemList);
  newLi.addEventListener('dblclick', checkItem);
  listTodo.appendChild(newLi);
  items.push(e.target.value);
  e.target.value = '';
}

function createLis(e) {
  if (e.target.id === 'criar-tarefa') {
    addFromButton();
  }

  if (e.target.id === idInput) {
    addFromEnter(e);
  }
}

function addItemList() {
  const buttonSearch = document.getElementById('criar-tarefa');
  buttonSearch.addEventListener('click', createLis);
  const input = document.getElementById(idInput);
  input.addEventListener('keyup', (e) => {
    if (e.key.charCodeAt() === 69) {
      createLis(e);
    }
  });
}

function clearListItens() {
  console.log(items);
  const allItens = document.getElementById(idOrderList);
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
