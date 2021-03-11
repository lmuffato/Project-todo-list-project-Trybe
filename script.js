function checkEachTask() {
  const newElement = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') {
    alert('Você precisa escrever algo para adicionar à lista!');
  } else {
    document.getElementById('lista-tarefas').appendChild(newElement);
    newElement.innerText = inputValue;
    inputValue.value = '';
  }
}

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', checkEachTask);

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
// const listItem = document.getElementsByTagName('li');

function saveMyTasks() {
  localStorage.myListOfTasks = myListOfTasks.innerHTML;
}
const btnSaveMyTasks = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined') {
  myListOfTasks.innerHTML = localStorage.myListOfTasks;
}

window.onload = btnSaveMyTasks.addEventListener('click', saveMyTasks);
