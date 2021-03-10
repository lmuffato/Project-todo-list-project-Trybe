const items = [];

function addItemList() {
  const inputSearch = document.getElementById('texto-tarefa');
  const buttonSearch = document.getElementById('criar-tarefa');
  const listTodo = document.getElementById('lista-tarefas');

  buttonSearch.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.innerText = inputSearch.value;
    listTodo.appendChild(newLi);
    items.push = inputSearch.value;
    inputSearch.value = '';
    console.log(items);
  });
}

window.onload = () => {
  addItemList();
};
