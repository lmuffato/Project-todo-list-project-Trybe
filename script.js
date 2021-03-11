// window.onload = () => {

// };

const btnAdicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const listOrdenada = document.getElementById('lista-tarefas');
const btnApagarTarefas = document.getElementById('apaga-tudo');

const colorList = 'rgb(128,128,128)';

// Função responsavel para adicionar um elemento na lista;
function addListInput() {
  btnAdicionarTarefa.addEventListener('click' , () => {  
    const list = document.createElement('li');
    if (inputText.value !== '') {
      list.innerHTML = inputText.value;
      listOrdenada.appendChild(list);
      list.classList.add('list');
      selectColor(list);
      listCompleted(list);
    }      
    clearInput();
  });
}
addListInput();

// Função responsavel para apagar todas tarefas da lista
function apagaTarefas() {
  btnApagarTarefas.addEventListener('click' , () => {
    listOrdenada.innerHTML = '';
    // for (let index = 0; index > arrayList.length; index += 1) {
    //   listOrdenada.removeChild(arrayList[index]);
    //   console.log(arrayList);
    // }
  });
}
apagaTarefas();

// Função para adicionar um dblclik na lista rgb(128,128,128);
function selectColor(list) {
  const arrayList = document.getElementById('lista-tarefas').childNodes;
  list.addEventListener('click', (event) => {
    for (let indexTwo = 0; indexTwo < arrayList.length; indexTwo += 1) {
      arrayList[indexTwo].classList.remove('colorList');
    }
    event.target.classList.add('colorList');
  });
}

// Função responsavel por riscar um elemento da lista
function listCompleted(list) {
  const arrayList = document.getElementById('lista-tarefas').childNodes
  list.addEventListener('dblclick', (event) => {
    for (let indexTwo = 0; indexTwo < arrayList.length; indexTwo += 1) {
      if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
      } else {
        event.target.classList.add('completed');
      }
    } 
  })
}

// Função responsavel para limpar o input;
function clearInput() {
  inputText.value = '';
}
clearInput()