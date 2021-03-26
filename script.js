// Item 5. Adiciona evento click no input texto, cria intem dentro da ol e apaga o texto do input

function addTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;

  li.addEventListener('click', function() {
      const liArray = document.querySelectorAll('li');
      for (let index = 0; index < liArray.length; index += 1) {
          liArray[index].style.backgroundColor = '';
      }
      addColor(li);
  })

  document.querySelector('#lista-tarefas').appendChild(li);
  inputTask.value = '';
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', addTask);

// adicona cor ao clicar no item da listados
// colocar cor na li clicada
function addColor(li) {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
}

// adiciona função que risca item e desfaz a ação tcomb

function lineThrough(event) {
  if (event.target.className !== 'completed') {
      event.target.classList.add('completed');
  } else {
      event.target.classList.remove('completed');
  }
}

const taksList = document.getElementById('lista-tarefas');
taksList.addEventListener('dblclick', lineThrough);

// Apaga tudo 

function clearAll() {
    while (taksList.childElementCount > 0) {
        taksList.firstElementChild.remove();
      }
  }
  clearAll();

  const clearItens = document.getElementById('apaga-tudo');
  clearItens.addEventListener('click', clearAll);
