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
  createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'
  headerMain.appendChild(createP);
}
paragraphCreate();