function titleCreate() {
  const tit = document.querySelector('header');
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Minha Lista de Tarefas';
  tit.appendChild(createH1);
}
titleCreate();

function paragraphCreate() {
  const headerMain = document.querySelector('header');
  const createP = document.createElement('p');
  createP.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  createP.id = 'funcionamento';
  headerMain.appendChild(createP);
}
paragraphCreate();

function inputSpace() {
  const sectionMain = document.querySelector('#btn');
  const createInput = document.createElement('input');
  createInput.type = 'text';
  createInput.placeholder = 'Sua tarefa aqui...';
  createInput.id = 'texto-tarefa';
  sectionMain.appendChild(createInput);
}
function button() {
  const sectionMain = document.querySelector('#btn');
  const createButton = document.createElement('button');
  createButton.innerHTML = 'Incluir';
  createButton.id = 'criar-tarefa';
  sectionMain.appendChild(createButton);
}
inputSpace();
button();

function ordenedList() {
  const sectionMain = document.querySelectorAll('section')[1];
  const createList = document.createElement('ol');
  createList.id = 'lista-tarefas';
  sectionMain.appendChild(createList);
}
ordenedList();

function inputList() {
  const olMain = document.querySelector('ol');
  const buttonInput = document.querySelector('button');
  const txt = document.querySelector('input');
  buttonInput.addEventListener('click', function () {
    const createOrdList = document.createElement('li');
    createOrdList.innerHTML = txt.value;
    createOrdList.id = 'ordened-list';
    olMain.appendChild(createOrdList);
    txt.value = '';
  });
}
inputList();

function changeBGColor() {
  const getLi = document.querySelectorAll('#ordened-list');
  console.log('não iniciou');
  if (getLi.length >= 1) {
    console.log('iniciou');
    for (let i = 0; i < getLi.length; i += 1) {
      console.log(getLi[i]);
      getLi[i].addEventListener('click', function(eventNN) {
        for (let j = 0; j < getLi.length; j += 1) {
          getLi[j].id = 'ordened-list';
        }
        eventNN.target.id = 'selected-list';
      })
    }
  }
}

function accessChangeBGColor () {
  const buttonNew = document.querySelector('button');
  buttonNew.addEventListener('click', function (eventLi) {
    console.log('nova funçao');
    changeBGColor();
    cleanAll();
  })
}
accessChangeBGColor();

function dbclickFunction() {
  const getLiSelected = document.querySelector('#lista-tarefas');
    getLiSelected.addEventListener('dblclick', (eventLiN) => {
      eventLiN.target.classList.toggle('completed');
      removeFinalized();
    })
}
dbclickFunction();

function cleanAll() {
  const liMain = document.querySelectorAll('#ordened-list');
  if (liMain.length < 1) {
    const createButtonClean = document.createElement('button');
    const btnMain = document.querySelector('#btn');
    createButtonClean.id = 'apaga-tudo';
    createButtonClean.innerHTML = 'Apaga';
    btnMain.appendChild(createButtonClean);
  } else {
    const buttonClean = document.querySelector('#apaga-tudo');
    buttonClean.addEventListener('click', function () {
    for (let i = 0; i < liMain.length; i += 1) {
      liMain[i].remove();
      }
    });
  }
}
cleanAll();

function removeFinalized() {
  const completedId = document.querySelectorAll('.completed');
  console.log(completedId.length);
  if (completedId.length < 1) {
    const btnMainSec = document.querySelector('#btn');
    const createButtonCleanFinal = document.createElement('button');
    createButtonCleanFinal.id = 'remover-finalizados';
    createButtonCleanFinal.innerHTML = 'Apaga Finalizados';
    btnMainSec.appendChild(createButtonCleanFinal);
  } else {
    const buttonCleanFinal = document.querySelector('#remover-finalizados');
    const liMainSec = document.querySelectorAll('li');
    buttonCleanFinal.addEventListener('click', function() {
      for (let i = 0; i < liMainSec.length; i += 1) {
        if (liMainSec[i].className === 'completed') {
          liMainSec[i].parentElement.removeChild(liMainSec[i]);
        }
      }
    })
  }
}
removeFinalized();