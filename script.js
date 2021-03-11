const text = document.getElementById('texto-tarefa');
const getClick = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
getClick.addEventListener('click', addText);
list.addEventListener('click', clicou);

function addText () {
  const createItem = document.createElement('li');
  createItem.innerText = text.value;
  text.value = '';
  createItem.className = 'listItem';
  list.appendChild(createItem);
}

function clicou (event) {
  const receiveItem = document.getElementsByClassName('listItem');
  const select = event.target
  for (let index = 0; index < receiveItem.length; index += 1) {
    if (receiveItem[index] === select) {
      receiveItem[index].classList.add('selected');
      receiveItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
    }
    else {
      receiveItem[index].classList.remove('selected');
      receiveItem[index].removeAttribute('style');
    }
  }

}