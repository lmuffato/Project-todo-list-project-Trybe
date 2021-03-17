function addInputToList() {
  const getInputText = document.getElementById('texto-tarefa');
  const getBtn = document.getElementById('criar-tarefa');
  const getList = document.getElementById('lista-tarefas');
  getBtn.addEventListener('click', function () {
    let createListItem = document.createElement('li');
    createListItem.innerText = getInputText.value;
    getList.appendChild(createListItem);
    getInputText.value = '';
  });
}

addInputToList();
