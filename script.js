function clickButton() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    let list;
    if (input.value === '') {
      list = '';
    } else {
      list = document.createElement('li');
      document.querySelector('#lista-tarefas').appendChild(list).innerText = input.value;
      input.value = '';
    }
  });
}
clickButton();
