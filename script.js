function add() {
  const getBtn = document.getElementById('criar-tarefa');
  const getInputText = document.getElementById('texto-tarefa');
  const getList = document.getElementById('lista-tarefas');

  getBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.addEventListener('dblclick', () => {
    });
    item.addEventListener('click', () => {
      item.classList.add('selected');
    });

    getList.appendChild(item).innerText = getInputText.value;
    getInputText.value = '';
  });
}

function clickEvent(event) {
  const currentSelected = document.querySelectorAll('.selected');
  for (let index = 0; index < currentSelected.length; index += 1) {
    currentSelected[index].classList.remove('selected');
    const classSelected = event.target;
    classSelected.classList.add('selected');
  }
}

function clickDel(event) {
  const getCompleted = event.target;
  console.log(getCompleted.classList.value)
  if (getCompleted.classList.value.includes('completed') == true) {
      getCompleted.classList.remove('completed');
  } else {
      getCompleted.classList.add('completed');
    }
}


function swapSelected() {
  const getSelected = document.getElementById('lista-tarefas');
  getSelected.addEventListener('click', clickEvent);
}

function swapCompleted() {
  const getSelected = document.getElementById('lista-tarefas');
  getSelected.addEventListener('dblclick', clickDel);
}

add();
swapSelected();
swapCompleted();
