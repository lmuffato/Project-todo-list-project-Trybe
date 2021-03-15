function addList() {
  const btnForAdd = document.querySelector('#criar-tarefa');
  btnForAdd.addEventListener('click', () => {
    const list = document.querySelector('#lista-tarefas');
    const leList = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = leList.value;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}
addList();
