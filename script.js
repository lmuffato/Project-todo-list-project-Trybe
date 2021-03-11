// recupera o botão e a caixa de texto
const button = document.querySelector('#criar-tarefa');
const boxText = document.querySelector('#texto-tarefa');

// função muda a cor de fundo da tarefa ao ser clicada
function changeColor(e) {
  e.target.className = 'tarefa-selecionada';
  e.target.style.backgroundColor = 'red';
}
// adiciona nova tarefa
function criaTarefa() {
  let item = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(item);
  item.innerText = boxText.value;
  boxText.value = '';
  // resetColor(item);
  // changeColor(item);
  item.addEventListener('click', changeColor);
}

button.addEventListener('click', criaTarefa);

/* function resetColor() {
  if()
} */
