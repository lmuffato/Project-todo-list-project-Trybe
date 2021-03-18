let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

function adiciona() {
  let elemento = document.createElement('li');
  elemento.innerText = input.value;
  lista.appendChild(elemento);
  input.value = null;
}

lista.addEventListener('click', pintar);

function pintar(event) {
  let elementAcionado = event.target;
  let itens = document.querySelectorAll('li');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
  }
  elementAcionado.classList.add('selected');
}