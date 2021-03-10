function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
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
window.onload = function run() {
  addItem();
};
