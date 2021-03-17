const button = document.querySelector('#criar-tarefa');
const elementOl = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const divLi = document.createElement('li');
  const inputText = document.querySelector('#texto-tarefa');
  divLi.innerText = inputText.value;
  elementOl.appendChild(divLi);
  inputText.value = '';

});

elementOl.addEventListener('click', (event) => {
  const selectionList = document.querySelectorAll('li');
  for (let index = 0; index < selectionList.length; index += 1) {
    if (selectionList[index].classList.contains('selectLi')) {
      selectionList[index].classList.remove('selectLi');
    }
  }
  event.target.classList.add('selectLi');
});

function addCompleted () {
  elementOl.addEventListener('dblclick',(event) => {
    if(event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

addCompleted();


// elementOl.addEventListener('dblclick', (event) => {
//   event.target.classList.add('completed');
//   elementOl.addEventListener('dblclick', (event) => {
//     if(event.target.classList.contains('completed')) {
//       event.target.classList.remove('completed');
//     }
//   });
// });

// referencias: https://cursos.alura.com.br/forum/topico-pegar-valor-do-input-com-javascript-62528
// http://devfuria.com.br/javascript/dom-create-element/#:~:text=A%20fun%C3%A7%C3%A3o%20createElement()%20ir%C3%A1,createElement(tagName)%3B
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
// https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
// https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
// Adelino Junior turma 10 tribo A
