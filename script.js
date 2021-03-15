// Requirement 1

const createHeader = document.createElement('header');
document.body.appendChild(createHeader);

const createH1 = document.createElement('h1');
createH1.innerHTML = 'Minha Lista de Tarefas';
createHeader.appendChild(createH1);

const createP = document.createElement('p');
createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
createP.style.fontSize = '15px'
createP.id = 'funcionamento';
createH1.appendChild(createP);
