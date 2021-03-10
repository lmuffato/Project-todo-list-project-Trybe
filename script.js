function checkEachTask() {
  const newElement = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const newText = document.createTextNode(inputValue);
  newElement.appendChild(newText);
  if (inputValue === '') {
    alert('Você precisa escrever algo para adicionar à lista!');
  } else {
    document.getElementById('lista-tarefas').appendChild(newElement);
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
