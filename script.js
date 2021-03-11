const assignmentText = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const assignmentList = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const creatAssignmentListItem = document.createElement('li');
  const assignmentListItem = assignmentList.appendChild(creatAssignmentListItem);
  assignmentListItem.innerText = assignmentText.value;
  assignmentText.value = '';
});

function passGrayColor(e) {
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (let item of listItem) {
    item.classList.remove('gray-color');
  }
  e.target.classList.add('gray-color');
}

function passGrayColorToTheList() {
  assignmentList.addEventListener('click', passGrayColor);
}
passGrayColorToTheList();

function crossOutLine(e) {
  const crossOutText = document.querySelectorAll('#lista-tarefas li');
  e.target.classList.add('completed');
  console.log(e.target.classList.value)
  if (e.target.classList.value === 'completed gray-color') {
    e.target.classList.remove('completed');
  }
}

function crossOutTheAssignmentLine() {
  assignmentList.addEventListener('dblclick', crossOutLine);
}
crossOutTheAssignmentLine();