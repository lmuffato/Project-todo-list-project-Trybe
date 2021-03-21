const bt = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
bt.addEventListener('click', addTarefa);


function addTarefa () {
  const itemlist = document.createElement('li');
  listaTarefas.appendChild(itemlist);
  itemlist.innerText = texto.value;
  texto.value = '';
  
}