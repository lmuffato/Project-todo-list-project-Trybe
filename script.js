const button = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');

function pressButton() {  
  const divLi = document.createElement('li');
  let inputText = document.querySelector('#texto-tarefa');
  divLi.innerText = inputText.value;
  elementOl.appendChild(divLi);
  inputText.value = '';
}

button.addEventListener('click', pressButton);

// referencias: https://cursos.alura.com.br/forum/topico-pegar-valor-do-input-com-javascript-62528
// http://devfuria.com.br/javascript/dom-create-element/#:~:text=A%20fun%C3%A7%C3%A3o%20createElement()%20ir%C3%A1,createElement(tagName)%3B
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
