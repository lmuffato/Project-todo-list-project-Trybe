const inputText = document.getElementById('texto-tarefa');
const buttonTarefa = document.getElementById('criar-tarefa');
const olTarefas = document.getElementById('lista-tarefas');
const clear = document.getElementById('apaga-tudo');

//req 5 e 6 
function criar() {
  const lista = document.createElement('li');
  const node = document.createTextNode(inputText.value);
  lista.appendChild(node);
  lista.classList.add('listItem');
  olTarefas.appendChild(lista);
  inputText.value = '';
}
buttonTarefa.addEventListener('click', criar);

// req 7 e 8
function changeBg(event) {
  const liItem = document.getElementsByTagName('li');
  for (let i = 0; i < liItem.length; i += 1) {
    liItem[i].style.backgroundColor = 'white';
  }
  const itemClick = event.target;
  itemClick.style.backgroundColor = 'rgb(128, 128, 128)';
}
olTarefas.addEventListener('click', changeBg);

//req 9 
function doubleClick(e) {
  const itemLi = e.target;
  itemLi.classList.add('completed');
}
olTarefas.addEventListener('dblclick', doubleClick);

    
// req 10
function remChild() {
  while (olTarefas.firstChild) {
    olTarefas.removeChild(olTarefas.firstChild);
  }
}
clear.addEventListener('click', remChild);
