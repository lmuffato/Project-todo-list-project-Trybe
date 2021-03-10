let input = document.querySelector('#texto-tarefa');
const createAssignment = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

createAssignment.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value
  todoList.appendChild(li)

  input.value = ''
})


