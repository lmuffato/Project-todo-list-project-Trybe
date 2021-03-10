function checkEachTask() {
  const newElement = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') {
    alert('Você precisa escrever algo para adicionar à lista!');
  } else {
    document.getElementById('lista-tarefas').appendChild(newElement);
    newElement.innerText = inputValue;
  }
}

const btn = document.getElementById('criar-tarefa');
btn.addEventListener('click', checkEachTask);

// function alterColorWhenClicked() {
//  const listItem = document.getElementsByTagName('li');
//  listItem.style.backgroundColor = 'rgb(128 , 128 , 128)';
//  listItem.addEventListener('click', alterColorWhenClicked);
// }

// alterColorWhenClicked();

function checkCompleteMyListOfTasks(event) {
  if (event.target.className !== 'completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
const myListOfTasks = document.getElementById('lista-tarefas');
myListOfTasks.addEventListener('dblclick', checkCompleteMyListOfTasks);
