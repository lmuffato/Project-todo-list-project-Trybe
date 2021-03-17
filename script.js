let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

function adiciona() {
  let elemento = document.createElement('li');
  elemento.innerText = input.value;
  lista.appendChild(elemento);
  input.value = null;
}
