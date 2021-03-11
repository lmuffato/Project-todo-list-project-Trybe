const taskWriten = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

// Requisitos 5 e 6
// Lógica para pegar texto do input e apagá-lo ao final vista no repositório
// do Jodiel https://github.com/tryber/sd-010-a-project-todo-list/pull/70
function AddToList() {
  let addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', function(){
    const elementList = document.createElement('li');
    let text = taskWriten.value;
    elementList.innerHTML = text;
    list.appendChild(elementList);
    taskWriten.value = '';
  });
}

AddToList();

// Requisito 7 e 8
// Lógica do "selected" vista no projeto do Jodiel
function SelectingTask() {
    list.addEventListener('click', (event) =>{
        let color = 'rgb(128, 128, 128)';
        const checkingId = document.querySelector('#selected');
        if (checkingId != null) {
          document.querySelector('#selected').style.backgroundColor = 'white';
          document.querySelector('#selected').id = '';
        }
        event.target.style.backgroundColor = color;
        event.target.id = 'selected';
    });
}

SelectingTask();