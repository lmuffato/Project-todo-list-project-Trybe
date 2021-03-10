const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const addEvListenerNElements = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

const getAllTodoList = () => document.querySelectorAll('li');

const resetColor = (item) => {
  const todoItem = item;
  todoItem.style.backgroundColor = '';
};

const changeColor = (ev, color) => { // 'rgb(128, 128, 128)'
  console.log(ev);
  console.log('color: ' + color);
  getAllTodoList().forEach((x) => resetColor(x));
  const todoItem = ev.target;
  todoItem.style.backgroundColor = color;
};

const changeLineThrough = (ev, className) => {
  console.log(ev);
  console.log('class: ' + className);
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

const addTodoToList = (item) => {
  const ol = document.querySelector('#lista-tarefas');
  ol.appendChild(item);
};

const insertTodo = () => {
  const inputTodo = document.querySelector('#texto-tarefa');
  const todo = createTodoItem(inputTodo.value);
  addTodoToList(todo);

  inputTodo.value = '';
};

const clearTodoList = () => {
  const listContainer = document.querySelector('#lista-tarefas');
  listContainer.innerHTML = '';
};

const clearCompletedTodoList = () => {
  const listContainer = document.querySelectorAll('.completed');
  for (let index = 0; index < listContainer.length; index += 1) {
    listContainer[index].remove();
  }
};

window.onload = () => {
  addEvListener('#criar-tarefa', 'click', insertTodo);
  addEvListener('#apaga-tudo', 'click', clearTodoList);
  addEvListener('#remover-finalizados', 'click', clearCompletedTodoList);
};
