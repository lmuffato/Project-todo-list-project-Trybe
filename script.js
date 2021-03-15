function addTasktoList() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', (e) => {
    const taskList = document.getElementById('lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    if (input.value !== '') {
        const createListItem = document.createElement('li');
        taskList.appendChild(createListItem);
        createListItem.innerHTML = input.value;
    }
  });

}

addTasktoList();

// visita ao repositório: https://github.com/tryber/sd-010-a-project-todo-list/pull/94/commits/99c02b6ca82a239c7e48bbfdef5d18efeaade068 para eventuais correções de sintaxe.
