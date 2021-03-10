const items = [];

function clearSelection() {
  const listLis = document.getElementsByClassName('item');
  for (let index = 0; index < listLis.length; index += 1) {
    listLis[index].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function selectItemList(e) {
  clearSelection();
  e.target.style.backgroundColor = 'rgb(128,128,128)';
}

function addItemList() {
  const inputSearch = document.getElementById('texto-tarefa');
  const buttonSearch = document.getElementById('criar-tarefa');
  const listTodo = document.getElementById('lista-tarefas');

  buttonSearch.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerText = inputSearch.value;
    newLi.className = 'item';
    newLi.addEventListener('click', selectItemList);
    listTodo.appendChild(newLi);
    items.push = inputSearch.value;
    inputSearch.value = '';
    console.log(items);
  });
}

window.onload = () => {
  addItemList();
};
