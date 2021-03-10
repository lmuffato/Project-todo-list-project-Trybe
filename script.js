const assignmentText = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const assignmentList = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const creatAssignmentListItem = document.createElement('li');
  const assignmentListItem = assignmentList.appendChild(creatAssignmentListItem);
  assignmentListItem.innerText = assignmentText.value;
  assignmentText.value = "";
});
