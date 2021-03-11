// window.onload = function () {
//   getAll();
// };

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

// function saveAll() {
//   const li = document.querySelector('#lista-tarefas').innerText;
//   let tasks = {};
//   for (let index = 0; index < li.length; index += 1) {
//     tasks[index] = ('task', `${li[index]}`);
//   }
//   console.log(tasks);
//   localStorage.setItem('task', JSON.stringify(tasks));
// }

// function getAll() {
//   console.log(JSON.parse(localStorage.getItem('tasks')));
// }

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

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', resetInput);

const cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', cleanList);

const removeFinishedBtn = document.querySelector('#remover-finalizados');
removeFinishedBtn.addEventListener('click', removeFinished);

// const saveAllBtn = document.querySelector('#salvar-tarefas');
// saveAllBtn.addEventListener('click', saveAll);

// const upBtn = document.querySelector('#mover-cima');
// upBtn.addEventListener('click', moveUp);

// const downBtn = document.querySelector('#mover-baixo');
