function createListItem() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const listItem = document.getElementById('texto-tarefa').value;
    const node = document.createElement('li');
    const textNode = document.createTextNode(listItem);
    node.appendChild(textNode);
    document.getElementById('lista-tarefas').appendChild(node);
  });
}
window.onload = () => {
  createListItem();
};
