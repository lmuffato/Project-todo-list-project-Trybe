// botao adiciona nova tarefa
let button = document.querySelector('#criar-tarefa');
let boxText = document.querySelector('#texto-tarefa');

button.addEventListener('click' , function () {
  let novaTarefa = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(novaTarefa);
  novaTarefa.innerText = boxText.value;
  boxText.value = '';
})