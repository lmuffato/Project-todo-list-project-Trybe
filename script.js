// Requisito 5 e 6

const submitItem = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const outputOl = document.getElementById('lista-tarefas');

submitItem.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.innerText = inputItem.value;
  outputOl.appendChild(createLi);
  inputItem.value = '';
});

// Requisito 7 e 8

outputOl.addEventListener('click', (event) => {
  const drawLi = event.target;
  const selectedLi = document.querySelectorAll('li');
  for (let index = 0; index < selectedLi.length; index += 1) {
    selectedLi[index].classList.remove('selected');
  }
  drawLi.classList.add('selected');
});

// Requisito 9
outputOl.addEventListener('dblclick', (event) => {
  const troughLi = event.target;
  troughLi.classList.toggle('completed');
});
