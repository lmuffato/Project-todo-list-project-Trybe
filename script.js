/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input. */
function creatTasks() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const inputElement = document.querySelector('#texto-tarefa');
    const getText = inputElement.value;
    const liElment = document.createElement('li');
    liElment.innerHTML = getText;
    const olElment = document.querySelector('#lista-tarefas');
    olElment.appendChild(liElment);
    inputElement.value = '';
  });
}
creatTasks();
