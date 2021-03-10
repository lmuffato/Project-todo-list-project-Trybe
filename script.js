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
    }      
    clearInput();
  });
}
addListInput();

// Função para adicionar um dblclik na lista rgb(128,128,128);
function selectColor(list) {
  const arrayList = document.querySelectorAll('.list');
  list.addEventListener('dblclick', () => {
    list.style.backgroundColor = colorList;
  });
}

// Função responsavel para limpar o input;
function clearInput() {
  inputText.value = '';
}
clearInput()