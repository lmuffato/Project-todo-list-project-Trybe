function titleCreate () {
  const tit = document.querySelector('header');
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Minha Lista de Tarefas';
  tit.appendChild(createH1);
}
titleCreate();

function paragraphCreate () {
  const headerMain = document.querySelector('header');
  const createP = document.createElement('p');
  createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  createP.id = 'funcionamento';  
  headerMain.appendChild(createP);
}
paragraphCreate();

function inputSpace () {
  const sectionMain = document.querySelector('#btn');
  const createInput = document.createElement('input');
  createInput.type = 'text';
  createInput.placeholder = 'Sua tarefa aqui...';
  createInput.id = 'texto-tarefa';
  sectionMain.appendChild(createInput);
}
function button () {
  const sectionMain = document.querySelector('#btn');
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Incluir';
  createButton.id = 'criar-tarefa';
  sectionMain.appendChild(createButton);
}
inputSpace();
button();

function ordenedList () {
  const sectionMain = document.querySelector('#list');
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  sectionMain.appendChild(createList);
}
ordenedList();

function inputList () {
  const olMain = document.querySelector('ol');
  const buttonInput = document.querySelector('button');
  const txt = document.querySelector('input');
  const allLi = document.getElementsByTagName('li');
  buttonInput.addEventListener('click', function() {
    const createOrdList = document.createElement('li');
    createOrdList.innerHTML = txt.value;
    olMain.appendChild(createOrdList);
    txt.value = '';
    console.log(allLi.length);
  })
}
inputList();