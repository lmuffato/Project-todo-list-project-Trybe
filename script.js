function addItens () {

  let list = document.querySelector('#lista-tarefas');
  let button = document.querySelector('#criar-tarefa');
  let input = document.querySelector('#texto-tarefa');
  input.addEventListener('input', function (e) {
    console.log(e)
    input.value = e.target.value
  })
  button.addEventListener('click', function() {
    let item = document.createElement('li');
    item.className = 'to-do-itens';
    list.appendChild(item);
    item.innerText = input.value;
    input.value = ''
  })
}

addItens();