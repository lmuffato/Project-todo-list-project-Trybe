const submitItem = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const outputOl = document.querySelector('#lista-tarefas');

submitItem.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.innerText = inputItem.value;
  outputOl.appendChild(createLi);
  inputItem.value = '';
});

outputOl.addEventListener('click', (event) => {
  const drawLi = event.target;
  drawLi.target.style.backgroundColor = 'rgb(128, 128, 128)';
})