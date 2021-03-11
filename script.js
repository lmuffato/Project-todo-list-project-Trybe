function getInput() {
  const inputValue = document.getElementById('texto-tarefa').value;
  return inputValue;
}

function clickListItem() {
  const listItem = document.getElementsByTagName('li');

  Array.from(listItem).forEach((item) => {
    item.addEventListener('click', (event) => {
      const element = event.target;
      element.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  });
}

function addListItem() {
  const ol = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerHTML = getInput();
  ol.appendChild(listItem);
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
