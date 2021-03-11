function addTaskToList() {
  const ol = document.getElementById('lista-tarefas');
  const btnAddTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', () => {
    if (inputText.value.length > 0) {
      const li = document.createElement('li');
      li.innerHTML = inputText.value;
      li.classList.add('task');
      ol.appendChild(li);
      inputText.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}

function removeSelected() {
  const taskItems = document.querySelectorAll('.task');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskItems[index].classList.remove('selected');
  }
}

function selectedTask() {
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('click', (e) => {
    removeSelected();
    e.target.classList.add('selected');
  });
}

function completedTask() {
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('completed');
  });
}

function addButton(id, text) {
  const btn = document.createElement('button');
  const section = document.getElementById('buttons');
  btn.id = id;
  btn.innerText = text;
  section.appendChild(btn);
}

function clearTaksList() {
  const btn = document.getElementById('apaga-tudo');
  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      lis[index].remove();
    }
  });
}

function clearCompletedTasks() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      if (lis[index].classList.contains('completed')) {
        lis[index].remove();
      }
    }
  });
}

window.onload = () => {
  addTaskToList();
  selectedTask();
  completedTask();
  addButton('apaga-tudo', 'Apagar tarefas');
  addButton('remover-finalizados', 'Remover finalizados');
  clearTaksList();
  clearCompletedTasks();
};
