const ol = document.getElementById('lista-tarefas');
const li = document.querySelectorAll('.itens');

function changeColor(itens) {
  const colorize = document.getElementsByClassName('itens');
  const select = itens.target;
  for (let index = 0; index < colorize.length; index += 1) {
    if (colorize[index] === select) {
      colorize[index].classList.add('selected');
      colorize[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      colorize[index].classList.remove('selected');
      colorize[index].removeAttribute('style');
    }
  }
}

function lineTrhough(itens) {
  if (itens.target.classList.contains('completed')) {
    itens.target.classList.toggle('completed');
  } else {
    itens.target.classList.toggle('completed');
  }
}

function resetInput() {
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
  ol.innerHTML = '';
}

function removeFinished() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      ol.removeChild(li[index]);
    }
  }
}

function saveAll() {
  localStorage.setItem('task', ol.innerHTML);
}

function getAll() {
  ol.innerHTML = localStorage.getItem('task');
  ol.addEventListener('dblclick', lineTrhough);
  ol.addEventListener('click', changeColor);
}

// function moveUp() {
//   const li = document.getElementsByClassName('itens');
//   let liDescarte = '';
//   console.log(li);
//   for (let index = 0; index < li.length; index += 1) {
//     if (li[index].classList.contains('selected')) {
//       liDescarte = li[index - 1];
//       console.log(liDescarte);
//       li[index - 1] = li[index];
//       console.log(li[index - 1]);
//       li[index] = liDescarte;
//       console.log(li[index]);
//     }
//   }
//   console.log(li);
// }

// for (let index = 0; index < li.length; index += 1) {
//   if (index === 1) {
//     liDescarte = li[index + 1];
//     li[index + 1] = li[index];
//     li[index] = liDescarte;
//   }
// }

const sendBtn = document.querySelector('#criar-tarefa');
sendBtn.addEventListener('click', resetInput);

const cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', cleanList);

const removeFinishedBtn = document.querySelector('#remover-finalizados');
removeFinishedBtn.addEventListener('click', removeFinished);

const saveAllBtn = document.querySelector('#salvar-tarefas');
saveAllBtn.addEventListener('click', saveAll);

// const upBtn = document.querySelector('#mover-cima');
// upBtn.addEventListener('click', moveUp);

// const downBtn = document.querySelector('#mover-baixo');
window.onload = () => {
  getAll();
};
