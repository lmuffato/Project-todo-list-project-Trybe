const list = document.getElementById('lista-tarefas');

function clearInputField() {
  const clearContent = document.getElementById('texto-tarefa');
  clearContent.value = '';
}

function insertToDo() {
  const content = document.getElementById('texto-tarefa').value;
  const node = document.createElement('li');
  // Refatorar condição
  if (content != null) {
    node.innerHTML = content;
    list.appendChild(node);
  }
  clearInputField();
}

function setBackgroundColor() {
  list.addEventListener('click', (event) => {
    const childrenList = list.children;
    for (let index = 0; index < childrenList.length; index += 1) {
      childrenList[index].classList.remove('selectedItem');
    }
    event.target.classList.add('selectedItem');
  });
}

function markCompleted() {
  list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

window.onload = () => {
  setBackgroundColor();
  markCompleted();
};
