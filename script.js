function add() {
  const getBtn = document.getElementById('criar-tarefa');
  const getInputText = document.getElementById('texto-tarefa');
  const getList = document.getElementById('lista-tarefas');

  getBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.addEventListener('click', () => {
      item.className = 'selected';
    });
    getList.appendChild(item).innerText = getInputText.value;
    getInputText.value = '';
  });
}

function clickEvent(event) {
  const currentSelected = document.getElementsByClassName('selected')[0];
  currentSelected.classList.remove('selected');
  const classSelected = event.target;
  classSelected.className = 'selected';
}

function swapSelected() {
  const getSelected = document.getElementById('lista-tarefas');
  getSelected.addEventListener('click', clickEvent);
}

add();
swapSelected();
