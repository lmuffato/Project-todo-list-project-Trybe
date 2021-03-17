const button = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas'); // Variaveis Gerais
const textoTarefa = document.getElementById('texto-tarefa');

// criar botão
function click() {
  const buttonAction = document.createElement('li');
  buttonAction.innerText = textoTarefa.value;
  listaTarefas.appendChild(buttonAction);
  textoTarefa.value = '';
}
button.addEventListener('click', click);

function colorList(e){
  const list = document.getElementsByTagName('li');
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.id = 'isSelected'
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] !== e.target) {
      list[index].style.backgroundColor = 'transparent';
      list[index].id = '';
    }
  }
}
listaTarefas.addEventListener('click', colorList);

listaTarefas.addEventListener('dblclick', function (e){
  if (e.target.className !== 'completed') {
    e.target.className = 'completed'
  } else {
    e.target.className = '';
  }
});
