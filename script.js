function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function change(element, list) {
  const selectedClass = 'task selected';
  for (let index2 = 0; index2 < list.length; index2 += 1) {
    const element2 = list[index2];
    if (element2.className === selectedClass) {
      element2.className = 'task';
      // eslint-disable-next-line no-param-reassign
      element.className = selectedClass;
    } else {
      // eslint-disable-next-line no-param-reassign
      element.className = selectedClass;
    }
  }
}

function setColor() {
  const list = document.getElementsByClassName('task');
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index];
    element.addEventListener('click', () => {
      change(element, list);
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
    setColor(); // declarado aqui para toda vez que um item for adicionado rodar a função de mudar de cor e atualizar o array;
  });
}

window.onload = function run() {
  addItem();
};
