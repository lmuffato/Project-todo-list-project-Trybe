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
  createInput.defaultValue = 'Sua tarefa aqui..';
  createInput.id = 'texto-tarefa';
  sectionMain.appendChild(createInput);
}
function button () {
  const sectionMain = document.querySelector('#btn');
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Incluir';
  sectionMain.appendChild(createButton);
}
inputSpace();
button();
