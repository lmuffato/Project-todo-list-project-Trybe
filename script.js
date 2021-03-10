function getInputHtml() {
  const getOl = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const getButton = document.querySelector('#criar-tarefa');

  function add() {
    const valueLi = getInput.value;
    const createLi = document.createElement('li');
    createLi.appendChild(document.createTextNode(valueLi));
    getOl.appendChild(createLi);
    getInput.value = '';
  }
  getButton.onclick = function () {
    add();
  };
}
window.onload = function () {
  getInputHtml();
};
