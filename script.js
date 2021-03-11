function button () {
	let addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', function () {
	let list = document.querySelector('#lista-tarefas');
	let writedText = document.querySelector('#texto-tarefa')
	let li = document.createElement('li');
	li.innerHTML = writedText.value;
	list.appendChild(li);
	document.querySelector('#texto-tarefa').value = '';
});
}
button ()
// requisito 5 feito com a ajuda do colega Lucas Pedroso