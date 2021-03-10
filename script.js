function AddTaskToList() {
  const ol = document.getElementById('lista-tarefas');
  const btnAddTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', () => {
    if(inputText.value.length > 0) {
      const li = document.createElement('li');
      li.innerText = inputText.value;
      ol.appendChild(li);
      inputText.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}

window.onload = () => {
  AddTaskToList();
}