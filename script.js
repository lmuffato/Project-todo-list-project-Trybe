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

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}
// https://stackoverflow.com/questions/13555785/remove-all-child-from-node-with-the-same-class-pure-js
function removeFinishedItems() {
  const getChilds = list.getElementsByClassName('completed');
  while (getChilds[0]) {
    getChilds[0].parentNode.removeChild(getChilds[0]);
  }
}

function saveTasks() {
  localStorage.setItem('userSession', list.innerHTML);
}

function getTasks() {
  const content = localStorage.getItem('userSession');
  console.log(content);
  if (content) {
    list.innerHTML = content;
  }
}

window.onload = () => {
  setBackgroundColor();
  markCompleted();
  getTasks();
};
