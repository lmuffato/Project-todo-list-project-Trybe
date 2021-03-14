function addList() {
  let btnForAdd = document.querySelector('#cria-tarefa');
  btnForAdd.addEventListener('click' , function () {
  let list = document.querySelector('#lista-tarefas');
  let leList = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.innerHTML = leList.value;
  list.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
});
}
addList();
