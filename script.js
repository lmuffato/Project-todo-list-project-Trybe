const button = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const deleteButton = document.querySelector('#apaga-tudo');
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

function changeColor() { 
  todoList.addEventListener('click', (e) => {
    const itemList = e.target;
    const liClass = document.getElementsByClassName('item')[0];
    if (liClass !== undefined) {
      liClass.classList.remove('item');
    }
    itemList.classList.add('item');
  });
}
changeColor();

function completeTask() {
  todoList.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('completed');
  });
}
completeTask();

function deleteTask(){
  deleteButton.addEventListener('click', (e) => {
  const taskItens = document.querySelector('#lista-tarefas');
  taskItens.innerHTML = '';
  });
}
deleteTask();

/* Venho aqui através desse comentário prestar meus agradecimento 
ao aluno Renzo Sevilha, pela ajuda com os requitos 7 e 8 e refatoração 
do código!!!! Muito obrigado!!!!!*/
 
 
