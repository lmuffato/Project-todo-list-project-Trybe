function checkEachTask() {
  const newElement = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa');
  if (inputValue === '') {
    alert('Você precisa escrever algo para adicionar à lista!');
  } else {
    document.getElementById('lista-tarefas').appendChild(newElement);
    newElement.innerText = inputValue;
    inputValue.value = '';
  }
}

const btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', checkEachTask);

function checkCompleteMyListOfTasks(event) {
  if (event.target.className !== 'completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
const myListOfTasks = document.getElementById('lista-tarefas');
myListOfTasks.addEventListener('dblclick', checkCompleteMyListOfTasks);

function eraseAll() {
  while (myListOfTasks.childElementCount > 0) {
    myListOfTasks.firstElementChild.remove();
  }
}

const eraseMyList = document.getElementById('apaga-tudo');
eraseMyList.addEventListener('click', eraseAll);

/* const itemBgCor = document.getElementsByTagName('li');
const newBgCor = itemBgCor.style.backgroundColor === 'rgb(128, 128, 128)';

if (!newBgCor) {
  itemBgCor.addEventListener('click',
    newBgCor, false);
} else if (itemBgCor.attachEvent) {
  itemBgCor.attachEvent(onclick,
    newBgCor, false);
} else {
  itemBgCor[onclick] = newBgCor;
}
itemBgCor.attachEvent('click', () => {
  itemBgCor.style.backgroundColor = 'rgb(128, 128, 128)';
}); */

/* Solução da função removeTaskDone foi compartilhada pelo colega Luciano Amâncio no Slack.
Segue link para a thread:
https://trybecourse.slack.com/archives/C01L16B9XC7/p1615426426071100 */

function removeTaskDone() {
  const removeItem = document.querySelector('#remover-finalizados');
  removeItem.addEventListener('click', () => {
    const taskCompleted = document.querySelectorAll('.completed');
    console.log('Item Removido');
    for (let index = 0; index < taskCompleted.length; index += 1) {
      if (taskCompleted[index].className === 'completed') {
        myListOfTasks.removeChild(taskCompleted[index]);
      }
    }
  });
}
removeTaskDone();

/* Para a função saveMyTasks, utilizei como base a solução de  Lucas Yoshida (Trybe, turma 4):
segue link do repositório: https://github.com/tryber/sd-04-block5-project-todo-list/pull/58
*/

function saveMyTasks() {
  localStorage.myListOfTasks = myListOfTasks.innerHTML;
}
const btnSaveMyTasks = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined') {
  myListOfTasks.innerHTML = localStorage.myListOfTasks;
}

window.onload = function initialize() {
  btnSaveMyTasks.addEventListener('click', saveMyTasks);
};

/* Referências consultadas para o projeto To do list:
https://www.w3schools.com/howto/howto_js_todolist.asp
DUCKETT, Jon. JavaScript & JQuery: desenvolvimento de interfaces web interativas. Rio de Janeiro: AltaBooks, 2015.
FLANAGAN, David. JavaScript: the defintive guide. 7 ed. Sebastopol: O'Reilly, 2020.
*/
