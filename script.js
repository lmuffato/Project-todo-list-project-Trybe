function createLi(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  listItem.className = 'task';
  document.getElementById('lista-tarefas').appendChild(listItem);
}

function change(list) {
  const selectedClass = 'task selected';
  let result = 0;
  for (let index2 = 0; index2 < list.length; index2 += 1) {
    const element2 = list[index2];
    if (element2.className === selectedClass) {
      element2.classList.remove('selected');
      result = 1;
    } else {
      result = 1;
    }
  }
  return result;
}

function setColor() {
  const list = document.getElementsByClassName('task');
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index];
    element.addEventListener('click', () => {
      if (change(list) === 1) {
        element.classList.add('selected');
      }
    });
  }
}

function doneTaskSelect(list) {
  let result = 0;
  let counter = 0;
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index];
    if (element === 'completed') {
      result = 1;
    } else {
      counter += 1;
    }
  }
  if (counter === list.length) {
    result = 2;
  }
  return result;
}

function doneTask() {
  const task = document.getElementsByClassName('task');
  for (let index = 0; index < task.length; index += 1) {
    const element = task[index];
    element.addEventListener('dblclick', () =>{
      const list = element.classList;
      const result = doneTaskSelect(list);
      if (result === 1) {
        element.classList.remove('completed');
      } else if (result === 2) {
        element.classList.add('completed');
      }
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
    doneTask();
  });
}


window.onload = function run() {
  addItem();
};
