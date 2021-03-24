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

// Requisito 09 Contribuição Lucas Pedroso
function riscaTexto(evento) {
  evento.target.classList.toggle('completed');
}

function apagaLista() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.innerHTML = '';
  }
}

function removeFinalizados(){
  const removeitem = document.getElementsByClassName('completed');
  let cont = removeitem.length;
  while(cont > 0){
  for (let index=0; index<removeitem.length; index+=1){
    listaTarefas.removeChild(removeitem[index]);
    cont= cont-1;
    console.log(cont)
  }
}
}

const bt = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btal = document.getElementById('apaga-tudo');
const btrf = document.getElementById('remover-finalizados');

bt.addEventListener('click', addTarefa);
listaTarefas.addEventListener('click', mudaCor);
listaTarefas.addEventListener('dblclick', riscaTexto);
btal.addEventListener('click', apagaLista);
btrf.addEventListener('click', removeFinalizados);
