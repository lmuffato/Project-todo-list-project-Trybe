// recupera o botão e a caixa de texto
const button = document.querySelector('#criar-tarefa');
const boxText = document.querySelector('#texto-tarefa');

// muda a cor de fundo da tarefa ao ser clicada
function changeColor(e) {
  // e.target.className = 'tarefa-selecionada';
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(e.target);
}

// retira a cor cinza
function resetColor() {
  const currentItem = document.getElementsByClassName('itemList');
  for (let index = 0; index < currentItem.length; index += 1) {
    if (currentItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      currentItem[index].style.backgroundColor = 'white';
    }
  }
}

// adiciona nova tarefa
function criaTarefa() {
  const item = document.createElement('li');
  item.className = 'itemList';
  item.innerText = boxText.value;
  document.querySelector('#lista-tarefas').appendChild(item);
  boxText.value = '';
  item.addEventListener('click', resetColor);
  item.addEventListener('click', changeColor);
}

button.addEventListener('click', criaTarefa);





//document.getElementById('lista-tarefas').addEventListener('click', changeColor);
