// Desafio 5 a 9
function selectItem(eventoDeOrigem) {
  const exclueOld = document.getElementsByClassName('selected');
  if (exclueOld.length > 0) {
    exclueOld[0].classList.remove('selected');
    eventoDeOrigem.target.classList.add('selected');
  } else {
    eventoDeOrigem.target.classList.add('selected');
  }
}

function donetItem(eventoDeOrigem) {
  eventoDeOrigem.target.classList.toggle('completed');
}

function addTask() {
  // Captura informação de texto
  const actualizeText = document.getElementById('texto-tarefa');
  const saveText = actualizeText.value;
  // Cria o elemento da lista
  const accessList = document.getElementById('lista-tarefas');
  const creatListElement = document.createElement('li');
  // preenche com o texto
  creatListElement.innerHTML = saveText;
  const print = accessList.appendChild(creatListElement);
  // Apaga a entrada na caixa de digitação
  actualizeText.value = '';
  // Adiciona o escutador de eventos
  const currentLists = document.getElementsByTagName('li');
  for (let index = 0; index < currentLists.length; index += 1) {
    currentLists[index].addEventListener('click', selectItem);
    currentLists[index].addEventListener('dblclick', donetItem);
  }
  return print;
}

const createTask = document.getElementById('criar-tarefa');
createTask.addEventListener('click', addTask);
