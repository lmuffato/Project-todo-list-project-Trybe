// recupera o botão e a caixa de texto
const button = document.querySelector('#criar-tarefa');
const boxText = document.querySelector('#texto-tarefa');

// adiciona nova tarefa
function criaTarefa() {
  const item = document.createElement('li');
  item.className = 'itemList';
  item.innerText = boxText.value;
  document.querySelector('#lista-tarefas').appendChild(item);
  boxText.value = '';
}

button.addEventListener('click', criaTarefa);

function resetColor() {
  const currentItem = document.getElementsByClassName('itemList');
  for (let index = 0; index < currentItem.length; index += 1) {
    if (currentItem[index].style.backgroundColor === 'red') {
      currentItem[index].style.backgroundColor = 'white';
    }
  }
}


// muda a cor de fundo da tarefa ao ser clicada
function changeColor(e) {
  // e.target.className = 'tarefa-selecionada';
  e.target.style.backgroundColor = 'red';
  console.log(e.target);
}

document.getElementById('lista-tarefas').addEventListener('click', resetColor);

document.getElementById('lista-tarefas').addEventListener('click', changeColor);
