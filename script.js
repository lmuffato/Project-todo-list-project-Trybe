const assignmentText = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const assignmentList = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const creatAssignmentListItem = document.createElement('li');
  creatAssignmentListItem.classList = 'list-item';
  const assignmentListItem = assignmentList.appendChild(creatAssignmentListItem);
  assignmentListItem.innerText = assignmentText.value;
  assignmentText.value = '';
  console.log(document.querySelectorAll('.list-item'));
});

function passGrayColor(e) {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function passGrayColorToTheList() {
  assignmentList.addEventListener('click', passGrayColor);
}
passGrayColorToTheList();
