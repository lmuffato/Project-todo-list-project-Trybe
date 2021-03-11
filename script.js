function getInput() {
  const inputValue = document.getElementById('texto-tarefa').value;
  return inputValue;
}

function removeBackground() {
  const listItem = document.querySelectorAll('.selected');
  Array.from(listItem).forEach((item) => {
    item.classList.remove('selected');
  });
}

function clickListItem() {
  const clickItem = document.getElementsByTagName('li');

  Array.from(clickItem).forEach((item) => {
    item.addEventListener('click', (event) => {
      const element = event.target;
      removeBackground();
      element.classList.add('selected');
    });
  });
}

function addListItem() {
  const ol = document.getElementById('lista-tarefas');
  const listElement = document.createElement('li');
  listElement.innerHTML = getInput();
  ol.appendChild(listElement);
  clickListItem();
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
