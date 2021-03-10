function changeColor(item) {
  const colorize = document.getElementsByClassName('itens');
  const targe = item.target;
  for (let index = 0; index < colorize.length; index += 1) {
    if (colorize[index] === targe) {
      colorize[index].setAttribute('class', 'itens selected');
      colorize[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      colorize[index].setAttribute('class', 'itens');
      colorize[index].removeAttribute('style');
    }
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
  ol.addEventListener('click', changeColor);
  console.log(ol.length);
}



const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', resetInput);
// const itemColor = document.querySelector('#lista-tarefas');
