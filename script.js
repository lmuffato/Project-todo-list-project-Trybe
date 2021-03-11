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
  const allItens = document.getElementById(idOrderList);
  for (let index = allItens.children.length - 1; index >= 0; index -= 1) {
    allItens.children[index].remove();
    localStorage.removeItem(localStorage.key(index));
  }
}

function activeButtonClearAll() {
  const buttonClearAll = document.getElementById('apaga-tudo');
  buttonClearAll.addEventListener('click', clearListItens);
}

function deleteCompleteds() {
  const listItens = document.getElementsByClassName('item');
  for (let index = listItens.length - 1; index >= 0; index -= 1) {
    if (listItens[index].className === 'item completed') {
      listItens[index].remove();
      localStorage.removeItem(localStorage.key(index - 1));
    }
  }
}

function activeButtonClearCompleteds() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', deleteCompleteds);
}

function saveTasks() {
  const listItens = document.getElementsByClassName('item');

  for (let index = 0; index < listItens.length; index += 1) {
    localStorage.setItem(
      index,
      JSON.stringify([listItens[index].innerText, listItens[index].className]),
    );
  }
}

function activeButtonSaveTasks() {
  const button = document.getElementById('salvar-tarefas');
  button.addEventListener('click', saveTasks);
}

function addItensStorage(array) {
  const orderList = document.getElementById(idOrderList);

  console.log(array);

  const newEl = document.createElement('li');
  newEl.innerText = array[0].toString();
  newEl.className = array[1].toString();
  console.log(array);
  newEl.addEventListener('click', selectItemList);
  newEl.addEventListener('dblclick', checkItem);

  orderList.appendChild(newEl);
}

function checkStorage() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      console.log(key);
      const item = JSON.parse(localStorage.getItem(localStorage.key(index)));
      console.log(item);
      addItensStorage(item);
    }
  }
}

window.onload = () => {
  checkStorage();
  addItemList();
  activeButtonClearAll();
  activeButtonClearCompleteds();
  activeButtonSaveTasks();
};
