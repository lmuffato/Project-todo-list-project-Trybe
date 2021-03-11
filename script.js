const input = document.querySelector('#texto-tarefa');
const createAssignment = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clear = document.querySelector('#remover-finalizados');

createAssignment.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value
  todoList.appendChild(li)

  input.value = ''
});

//resolvido com a ajuda da amiga Clarice Oliveira.
todoList.addEventListener('click', (e) => {
  const selectedItem = e.target;
  const liColor = document.querySelectorAll('#lista-tarefas li');
  for (const liC of liColor) {
    liC.classList.remove('gray')
  }
      selectedItem.classList.toggle('gray');
}); 

todoList.addEventListener('dblclick', (e) => {
  const selectedItem = e.target;
  
  selectedItem.classList.add('completed');
}); 

//código feito baseado no code Review do Lucas Pedroso.
clear.addEventListener('click', () => {
  const listContainer = document.querySelectorAll('.completed');
  for (let index = 0; index < listContainer.length; index += 1) {
    listContainer[index].remove();
  }
});

