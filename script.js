function addItens() {
  const list = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  button.addEventListener('click', function add() {
    const item = document.createElement('li');
    list.appendChild(item);
    item.innerText = input.value;
    input.value = '';
  });
}

addItens();

function changeItemColor() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', function (e) {
    const itens = e.target;
    const elementosLi = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < elementosLi.length; index += 1) {
      elementosLi[index].style.backgroundColor = document.body.style.backgroundColor;
    }
    if (itens.localName === 'li') {
      itens.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}

changeItemColor();

function crossWord() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', function (e) {
    const itens = e.target;
    if (itens.classList.contains('completed')) {
      itens.classList.remove('completed');
    } else {
      itens.classList.add('completed');
    }
  });
}

crossWord();

function eraseAll() {
  const button = document.querySelector('#apaga-tudo');
  const list = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    list.innerHTML = '';
  });
}

eraseAll();

function eraseCompleted() {
  const button = document.querySelector('#remover-finalizados');
  const listFather = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    const list = document.getElementsByClassName('completed');
    while (list.length > 0) {
    listFather.removeChild(list[0]);
    }
  });
}

eraseCompleted();
