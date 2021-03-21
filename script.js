const bt = document.getElementById('criar-tarefa');
bt.addEventListener('click', addTarefa);

function addTarefa () {
  const texto = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  lista.appendChild(li);
  li.innerText = document.getElementById('texto-tarefa').value;
  console.log(li)
  document.getElementById('texto-tarefa').innerText = ' ';
}