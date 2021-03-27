// Item 5. Adiciona evento click no input texto, cria intem dentro da ol e apaga o texto do input

function addTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerHTML = inputTask.value;
  if (inputTask.value != '') {
    li.addEventListener('click', function() {
        const liArray = document.querySelectorAll('li');
        for (let index = 0; index < liArray.length; index += 1) {
            liArray[index].style.backgroundColor = '';
        }
        addColor(li);
    });
    document.querySelector('#lista-tarefas').appendChild(li);
    inputTask.value = '';
  }
}

const task = document.querySelector('#criar-tarefa');
task.addEventListener('click', addTask);

// adicona cor ao clicar no item da listados
// colocar cor na li clicada
function addColor(li) {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
}

// cria funcao q tirar o selecionado dos itens e adiciona o novo
const escutaTodaOl = document.querySelector('#lista-tarefas');
escutaTodaOl.addEventListener('click', selected);
const todasLi = document.getElementsByTagName('li');

function selected(event) {
  for (let index = 0; index < todasLi.length; index += 1) {
    todasLi[index].classList.remove('selected');
    const getClassSelected = event.target;
    getClassSelected.classList.add('selected');
  }
}

// Cria funcao que limpa Selecionado
/* 
function removeSelectedItem() {
  const itemParaRemover = document.querySelector('selected');
  escutaTodaOl.removeChild(itemParaRemover);
}

removeSelectedItem();

const btnSelectedItem = document.querySelector('#remover-selecionado');
btnSelectedItem.addEventListener('click', removeSelectedItem); */

// adiciona função que risca item e desfaz a ação tbm

function lineThrough(event) {
  const armazenaEvento = event.target;
  if (armazenaEvento.classList.contains('completed')) {
    armazenaEvento.classList.remove('completed');
  } else {
    armazenaEvento.classList.add('completed');
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

  // Funcao que remove os itens Finalizados

  function removeItemDone() {    
    const listContainer = document.querySelectorAll('.completed');
    for (let index = 0; index < listContainer.length; index += 1) {
      if (listContainer[index].className === 'completed') {
        document.querySelector('#lista-tarefas').removeChild(listContainer[index]);
      }
    }   
  };
  
  removeItemDone();
  
  const selectedDone = document.querySelector('#remover-finalizados');
  selectedDone.addEventListener('click', removeItemDone);

    // Funcao que remove os item selecionado

 /*  function removeSelectedItem() {
    const selectedItem = document.querySelectorAll('.selected')
    removeChild(selectedList)
  }

  const btnSelectedItem = document.querySelector('#remover-selecionado');
  btnSelectedItem.addEventListener('click', removeSelectedItem);
 */