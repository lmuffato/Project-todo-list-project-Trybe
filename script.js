// Requisito 5 e 6

const submitItem = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const outputOl = document.querySelector('#lista-tarefas');

submitItem.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.innerText = inputItem.value;
  outputOl.appendChild(createLi);
  inputItem.value = '';
});

// Requisito 7

outputOl.addEventListener('click', (event) => {
  const drawLi = event.target;
  drawLi.classList.add('selected');
});

// Requisito 8
