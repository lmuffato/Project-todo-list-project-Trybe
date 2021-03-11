function clearInput() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    document.getElementById('texto-tarefa').value = '';
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
    const listItem = document.getElementsByTagName('li'); 
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].addEventListener('click', () => {
        listItem[index].style.backgroundColor = 'red';
        listItem[index].classList.add('selected');
        clearColor();
      });
    }
  });
}
function clearColor() {

}
window.onload = () => { 
  createListItem();

  clearInput();
};
