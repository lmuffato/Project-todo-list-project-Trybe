//Requesito 5, 6, 7 e 8
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', newItem);

function newItem () {
  let textTask = document.getElementById('texto-tarefa');
  let addList = document.getElementById('lista-tarefas').appendChild(document.createElement('li'));
  addList.innerHTML = textTask.value;
  textTask.value = '';

  let listTask = document.getElementsByTagName('li');

  for (let index = 0; index < listTask.length; index += 1) {
    const listAll = listTask[index];
    listAll.addEventListener('click', paintItem);
  }

  function paintItem (e) {
    for (let index = 0; index < listTask.length; index += 1) {
      const removeClass = listTask[index];
      removeClass.classList.remove('add-background');
    }
    e.target.classList.add('add-background');
  }
}
