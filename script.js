function insertList() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.getElementById('texto-tarefa').value;
    const list = document.createElement('li');
    if (input !== '') {
      document.getElementById('lista-tarefas').appendChild(list).innerText = input;
      document.getElementById('texto-tarefa').value = '';
    }
  });
}

insertList();
