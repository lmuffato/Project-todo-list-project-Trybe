function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function changeColor() {
  const list = document.getElementsByClassName('task');
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index];
    element.addEventListener('click', () => {
      element.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function addItem() {
  const button = document.getElementById('criar-tarefa');
  const textBox = document.getElementById('texto-tarefa');
  button.addEventListener('click', () => {
    const text = textBox.value;
    createLi(text);
    textBox.value = '';
    changeColor(); // declarado aqui para toda vez que um item for adicionado rodar a função de mudar de cor e atualizar o array;
  });
}

window.onload = function run() {
  addItem();
};
