const button = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');
let input = '';
function pressbutton() {
  input = document.querySelector('#texto-tarefa');
  const inputValue = (input.value);
  const divLi = document.createElement('li');
  divLi.innerText = inputValue;
  elementOl.appendChild(divLi);
  input.value = '';
}

button.addEventListener('click', pressbutton);

// referencias: https://cursos.alura.com.br/forum/topico-pegar-valor-do-input-com-javascript-62528
// http://devfuria.com.br/javascript/dom-create-element/#:~:text=A%20fun%C3%A7%C3%A3o%20createElement()%20ir%C3%A1,createElement(tagName)%3B
