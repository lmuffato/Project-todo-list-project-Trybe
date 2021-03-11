function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function addItem() {
  const button = document.getElementById('criar-tarefa');
  const textBox = document.getElementById('texto-tarefa');
  button.addEventListener('click', () => {
    const text = textBox.value;
    createLi(text);
    textBox.value = '';
  });
}

// codigo abaixo otimizado apos verificar o codigo de alguns colegas e aprendi o event e o target
function setColor() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected === null) {
      event.target.classList.add('selected');
    } else {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

function doneTaskSelect(array) {
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element === 'completed') {
      result = 1;
    }
  }
  return result;
}

function doneTask() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    const array = event.target.classList;
    const result = doneTaskSelect(array);
    if (result === 1) {
      event.target.classList.remove('completed');
    } else if (result === 0) {
      event.target.classList.add('completed');
    }
  });
}

function clearTasks() {
  const btn = document.querySelector('#apaga-tudo');
  const list = document.querySelector('#lista-tarefas');
  btn.addEventListener('click', () => {
    while (list.hasChildNodes()) { // essa parte do código vi no w3school
      list.removeChild(list.firstChild);
    }
  });
}

window.onload = function run() {
  addItem();
  setColor(); // declarado aqui para toda vez que um item for adicionado rodar a função de mudar de cor e atualizar o array;
  doneTask();
  clearTasks();
};
