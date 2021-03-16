// Requirement 1

const createHeader = document.createElement('header');
document.body.appendChild(createHeader);

const createH1 = document.createElement('h1');
createH1.innerHTML = 'Minha Lista de Tarefas';
createHeader.appendChild(createH1);

// Requirement 2

const createP = document.createElement('p');
createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
createP.style.fontSize = '15px';
createP.id = 'funcionamento';
createH1.appendChild(createP);

// Requirement 3

const createInput = document.createElement('input');
createInput.id = 'texto-tarefa';
document.body.appendChild(createInput);

// Requirement 4

const createOrderedList = document.createElement('ol');
createOrderedList.id = 'lista-tarefas';
document.body.appendChild(createOrderedList);

// Requirement 5 - 6

const createButton = document.createElement('button');
document.body.appendChild(createButton);
createButton.innerText = 'Adicionar';
createButton.id = 'criar-tarefa';

createButton.addEventListener('click', createList);

function createList() {
  const createLi = document.createElement('li');
  createLi.innerHTML = createInput.value;
  createOrderedList.appendChild(createLi);
  createInput.value = '';
}

// Requirement 7 - 8

createOrderedList.addEventListener('click', paint);

function paint (e) {
  const listItem = createOrderedList.childNodes;
  for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].style.backgroundColor = '';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}