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

function button () {
  const sectionMain = document.querySelector('#btn');
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Incluir';
  createButton.id = 'texto-tarefa';
  sectionMain.appendChild(createButton);
}
button();

