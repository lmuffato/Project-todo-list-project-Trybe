const button = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
function taskList() {
  button.addEventListener('click', () => {
    const insertText = document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
    const textList = document.createElement('li');
    textList.innerText = insertText;
    todoList.appendChild(textList);
  });
}
taskList();
