function changeColor(item) {
  const colorize = document.getElementsByClassName('itens');
  const targe = item.target;
  for (let index = 0; index < colorize.length; index += 1) {
    if (colorize[index] === targe) {
      colorize[index].classList.add('selected');
      colorize[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      colorize[index].classList.remove('selected');
      colorize[index].removeAttribute('style');
    }
  }
}

function lineTrhough(item) {
  if (item.target.classList.contains('completed')) {
    item.target.classList.toggle('completed');
  } else {
    item.target.classList.toggle('completed');
  }
}

function resetInput() {
  const ol = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.className = 'itens';
  item.innerText = document.getElementById('texto-tarefa').value;
  ol.appendChild(item);
  if (item !== '') {
    document.getElementById('texto-tarefa').value = '';
  }
  ol.addEventListener('dblclick', lineTrhough);
  ol.addEventListener('click', changeColor);
}

function cleanList() {
  const ol = document.getElementById('lista-tarefas');
  ol.innerHTML = '';
}

function removeFinished() {
  const li = document.querySelectorAll('.itens');
  const ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      ol.removeChild(li[index]);
    }
  }
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', resetInput);

const cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', cleanList);

const removeFinishedBtn = document.querySelector('#remover-finalizados');
removeFinishedBtn.addEventListener('click', removeFinished);
