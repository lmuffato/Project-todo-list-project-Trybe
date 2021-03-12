function clearInput() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    document.getElementById('texto-tarefa').value = '';
  });
}
function clearBackgroundColor() {
  const itemSelected = document.querySelector('.selected');
  itemSelected.classList.remove('selected');
  itemSelected.classList.add('tarefa');
}
function itemCheck() {
  console.log('entrou');
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    const e = event.target;
    if (e.classList.contains('completed')) {
      e.classList.remove('completed');
    } else {
     e.classList.add('completed');
  }
  });
}
function createListItem() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const texto = document.getElementById('texto-tarefa').value;
    const node = document.createElement('li');
    node.className = 'tarefa';
    const textNode = document.createTextNode(texto);
    node.appendChild(textNode);
    document.getElementById('lista-tarefas').appendChild(node);
    const list = document.querySelector('#lista-tarefas');
    
    list.addEventListener('click', (event) => {
      const e = event.target;
      if (document.querySelectorAll('.selected').length >= 1) {
        clearBackgroundColor();
      }
      e.classList.add('selected');
      e.classList.remove('tarefa');
    });
  });
}

window.onload = () => { 
  createListItem();
  clearInput();
  if (document.getElementsByClassName('tarefa'.length >= 1)) {
    itemCheck();
  }
};
