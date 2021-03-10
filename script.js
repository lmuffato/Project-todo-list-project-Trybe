let input = document.querySelector('#texto-tarefa');
const createAssignment = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

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
      selectedItem.classList.add('gray');
}); 

todoList.addEventListener('dblclick', (e) => {
  const selectedItem = e.target;
  const liColor = document.querySelectorAll('#lista-tarefas li');
  
  selectedItem.classList.toggle('completed');
}); 


