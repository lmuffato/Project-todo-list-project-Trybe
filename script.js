const listItem = document.getElementsByTagName('li');

function getInput() {
  const inputValue = document.getElementById('texto-tarefa').value;
  return inputValue;
}

function removeBackground() {
  const listRmItem = document.querySelectorAll('.selected');

  Array.from(listRmItem).forEach((item) => {
    item.classList.remove('selected');
  });
}

function clickListItem() {
  Array.from(listItem).forEach((item) => {
    item.addEventListener('click', (event) => {
      const element = event.target;
      removeBackground();
      element.classList.add('selected');
    });
  });
}

function dblClickListItem() {
  Array.from(listItem).forEach((item) => {
    item.addEventListener('dblclick', (event) => {
      const element = event.target;
      //  Para saber mais sobre toggle acessei o seguinte link:
      //  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
      element.classList.toggle('completed');
    });
  });
}

function addListItem() {
  const ol = document.getElementById('lista-tarefas');
  const listElement = document.createElement('li');
  listElement.innerHTML = getInput();
  ol.appendChild(listElement);
  clickListItem();
  dblClickListItem();
}

function clickButton() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    addListItem();
    input.value = '';
  });
}

window.onload = function startSession() {
  clickButton();
};
