function addTarefa() {
  const itemlist = document.createElement('li');
  itemlist.classList.add('item');
  listaTarefas.appendChild(itemlist);
  itemlist.innerText = texto.value;
  texto.value = '';
}
function mudaCor(evento) {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.children[index].style.backgroundColor = '';
  }
  evento.target.style.background = 'rgb(128, 128, 128)';
}

function riscaTexto(evento) {
  evento.target.classList.toggle('completed');
  //for (let index = 0; index < listaTarefas.children.length; index += 1) {
    //if ( listaTarefas.children[index].classList === 'completed') {
      //listaTarefas.children[index].classList.toggle('completed');
    //}
    //listaTarefas.children[index].classList.add('completed');
  //}
}

const bt = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

bt.addEventListener('click', addTarefa);
listaTarefas.addEventListener('click', mudaCor);
listaTarefas.addEventListener('dblclick', riscaTexto);
