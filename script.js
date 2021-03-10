// requisitos 1, 2, 3 e 4 adicionados no index.html

// requisito 5 e 6
function createTask() {
  const addBtn = document.querySelector('#criar-tarefa');
  addBtn.addEventListener('click', () => {
    const olList = document.querySelector('#lista-tarefas');
    const createLi = document.createElement('li');
    const addText = document.getElementById('texto-tarefa').value;
    createLi.innerHTML = addText;
    olList.appendChild(createLi);
    document.getElementById('texto-tarefa').value = '';
  });
}
createTask();

// requisitos 7 e 8
function selectOlItem() {
  const olList = document.querySelector('#lista-tarefas');
  olList.addEventListener('click', (e) => {
    const color = 'rgb(128, 128, 128)';
    const checkNull = document.querySelector('#selected');
    if (checkNull != null) {
      document.querySelector('#selected').style.backgroundColor = 'white';
      document.querySelector('#selected').id = '';
    }
    e.target.style.backgroundColor = color;
    e.target.id = 'selected';
  });
}
selectOlItem();

// requisito 9
function completedSelect() {
  const olList = document.querySelector('#lista-tarefas');
  olList.addEventListener('dblclick', (e) => {
    if (e.target.className === 'completed') {
      e.target.className = '';
    } else {
      e.target.className = 'completed';
    }
  });
}
completedSelect();

// requisito 10
function clearList() {
  const clearBtn = document.querySelector('#apaga-tudo');
  clearBtn.addEventListener('click', () => {
    const olList = document.querySelector('#lista-tarefas');
    olList.innerHTML = '';
  });
}
clearList();

// requisito 11
function removeCompleted() {
  const removeBtn = document.querySelector('#remover-finalizados');
  removeBtn.addEventListener('click', () => {
    const list = document.querySelectorAll('#lista-tarefas li');
    //document.querySelector('#lista-tarefas').childNodes;
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className === 'completed') {
        document.querySelector('#lista-tarefas').removeChild(list[index]);
      }
    }
  });
}
removeCompleted();