const button = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const deleteButton = document.querySelector('#apaga-tudo');
const finishedTask = document.querySelector('#remover-finalizados');
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

/*function itemFinished() {
  const finishedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < finishedItens.length; index +=1) {
    finishedItens[index].remove();
  }
}
itemFinished();

function removeFinished() {
  finishedTask.addEventListener('click', itemFinished);
}
removeFinished();*/

function deleteTask() {
  deleteButton.addEventListener('click', () => {
    const taskItens = document.querySelector('#lista-tarefas');
    taskItens.innerHTML = '';
  });
}
deleteTask();
/* Venho aqui através desse comentário prestar meus agradecimento 
ao aluno Renzo Sevilha, pela ajuda com os requitos 7 e 8 e refatoração 
do código!!!! Muito obrigado!!!!!*/
 
 
