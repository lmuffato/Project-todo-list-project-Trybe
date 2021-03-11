const assignmentText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
const assignmentList = document.querySelector('#lista-tarefas');
const buttonRemove = document.querySelector('#apaga-tudo');

buttonAdd.addEventListener('click', () => {
  const creatAssignmentListItem = document.createElement('li');
  const assignmentListItem = assignmentList.appendChild(creatAssignmentListItem);
  assignmentListItem.innerText = assignmentText.value;
  assignmentText.value = '';
});

function passGrayColor(e) {
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (let key of listItem) {
    key.classList.remove('gray-color');
  }
  e.target.classList.add('gray-color');
}
assignmentList.addEventListener('click', passGrayColor);

function crossOutLine(e) {
  e.target.classList.add('completed');
  if (e.target.classList.value === 'completed gray-color') {
    e.target.classList.remove('completed');
  }
}
assignmentList.addEventListener('dblclick', crossOutLine);

buttonRemove.addEventListener('click', () => {
  assignmentList.innerText = '';
});
