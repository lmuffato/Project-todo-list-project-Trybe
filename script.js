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
