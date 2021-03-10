let getBtn = document.getElementById('criar-tarefa');
let getInputText = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');

getBtn.addEventListener('click', function() {
  let item = document.createElement('li');
  getList.appendChild(item).innerText = getInputText.value
  getInputText.value = ''
});






