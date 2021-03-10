const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const getAllTodoList = () => document.querySelectorAll('li');

const resetColor = (item) => {
  const todoItem = item;
  todoItem.style.backgroundColor = '';
};

const resetClass = (item, className) => {
  const todoItem = item;
  if (todoItem.classList.contains(className)) {
    todoItem.classList.remove(className);
  }
};

const changeColor = (ev, color) => { // 'rgb(128, 128, 128)'
  getAllTodoList().forEach((x) => resetColor(x));
  getAllTodoList().forEach((x) => resetClass(x, 'selected'));

  const todoItem = ev.target;

  todoItem.classList.add('selected');
  todoItem.style.backgroundColor = color;
};

const changeLineThrough = (ev, className) => {
  const todoItem = ev.target;
  todoItem.classList.toggle(className);
};

const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('dblclick', (e) => { changeLineThrough(e, 'completed'); });
  li.addEventListener('click', (e) => { changeColor(e, 'rgb(128, 128, 128)'); });
  return li;
};

const getListContainer = () => document.querySelector('#lista-tarefas');

const addTodoToList = (item) => {
  const ol = getListContainer();
  ol.appendChild(item);
};

const insertTodo = () => {
  const inputTodo = document.querySelector('#texto-tarefa');
  const todo = createTodoItem(inputTodo.value);
  addTodoToList(todo);

  inputTodo.value = '';
};

const clearTodoList = () => {
  const listContainer = getListContainer();
  listContainer.innerHTML = '';
};

const clearCompletedTodoList = () => {
  const listContainer = document.querySelectorAll('.completed');
  for (let index = 0; index < listContainer.length; index += 1) {
    listContainer[index].remove();
  }
};

const moveTodoItem = (count) => {
  let selected;
  let insertLocal;
  let indexItem;
  let listLength;
  const listTodoItem = getAllTodoList();
  for (let index = 0; index < listTodoItem.length; index += 1) {
    const element = listTodoItem[index];
    if (element.style.backgroundColor === 'rgb(128, 128, 128)') {
      selected = listTodoItem[index];
      indexItem = index;
      listLength = listTodoItem.length;
      insertLocal = listTodoItem[index + count];
    }
  }
  return { selected, indexItem, listLength, insertLocal };
};

const moveDown = () => {
  const { selected, indexItem, listLength, insertLocal } = moveTodoItem(2);
  if (!selected) return;
  if (indexItem === listLength) {
    return;
  }

  const listContainer = getListContainer();
  listContainer.insertBefore(selected, insertLocal);
};

const moveUp = () => {
  const { selected, indexItem, insertLocal } = moveTodoItem(-1);
  if (!selected) return;
  if (indexItem === 0) {
    return;
  }

  const listContainer = getListContainer();
  listContainer.insertBefore(selected, insertLocal);
};

const removeSelectItem = () => {
  const selected = document.querySelector('.selected');
  console.log(selected);
  const listContainer = getListContainer();
  listContainer.removeChild(selected);
};

const saveListLocalStorage = () => {
  const listContainer = getListContainer();
  localStorage.setItem('listTodo', JSON.stringify(listContainer.innerHTML));
};

const getListLocalStorage = () => {
  if (localStorage.getItem('listTodo') !== undefined) {
    const listTodoItens = localStorage.getItem('listTodo');
    const listContainer = getListContainer();
    listContainer.innerHTML = JSON.parse(listTodoItens);
  }
};

window.onload = () => {
  addEvListener('#remover-selecionado', 'click', removeSelectItem);
  addEvListener('#mover-cima', 'click', moveUp);
  addEvListener('#mover-baixo', 'click', moveDown);
  addEvListener('#criar-tarefa', 'click', insertTodo);
  addEvListener('#apaga-tudo', 'click', clearTodoList);
  addEvListener('#remover-finalizados', 'click', clearCompletedTodoList);
  addEvListener('#salvar-tarefas', 'click', saveListLocalStorage);
  getListLocalStorage();
};
