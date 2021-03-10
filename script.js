// window.onload = () => {

// };

const btnAdicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const listOrdenada = document.getElementById('lista-tarefas');

const colorList = 'rgb(128,128,128)';

// Função responsavel para adicionar um elemento na lista;
function addListInput() {
  btnAdicionarTarefa.addEventListener('click' , () => {  
    const list = document.createElement('li');
    if (inputText.value !== '') {
      list.innerHTML = inputText.value;
      list.className = 'list';
      listOrdenada.appendChild(list);
      selectColor(list);
      listCompleted(list);
    }      
    clearInput();
  });
}
addListInput();

// const teste = document.getElementById('lista-tarefas').childNodes
// console.log(teste);
// const arrayList = document.querySelectorAll('.list');

// Função para adicionar um dblclik na lista rgb(128,128,128);
function selectColor(list) {
  const arrayList = document.getElementById('lista-tarefas').childNodes
  list.addEventListener('dblclick', (event) => {
    for (let indexTwo = 0; indexTwo < arrayList.length; indexTwo += 1) {
      arrayList[indexTwo].classList.remove('colorList');
    }
    event.target.classList.add('colorList');
  });
}

function listCompleted(list) {
  list.addEventListener('dblclick', (event) => {
    if(event.target) {
      event.target.classList.add('completed');
    }
  });
}

// Função responsavel para limpar o input;
function clearInput() {
  inputText.value = '';
}
clearInput()