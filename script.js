// window.onload = ?;

const btnAdicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const listOrdenada = document.getElementById('lista-tarefas')
// const listOrdenadas = document.querySelectorAll('#lista-tarefas li');
// console.log(listOrdenadas);

// Função responsavel para adicionar um elemento na lista;
function addListInput() {
  btnAdicionarTarefa.addEventListener('click' , () => {
    const list = document.createElement('li');  
    if (inputText.value !== '') {
      list.innerHTML = inputText.value;
      listOrdenada.appendChild(list);
    }      
    clearInput();
  });
}
addListInput();

// Função responsavel para limpar o input;
function clearInput() {
  inputText.value = '';
}
clearInput()