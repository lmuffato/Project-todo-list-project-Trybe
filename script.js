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
  const classSelected = document.querySelector('.selectLi');
  event.target.classList.add('selectLi');
  classSelected.classList.remove('selectLi');
  // event.target.classList.add('selectLi');
});

// for (let index = 0; index < elementOl.length; index += 1) {
//   elementOl[index].addEventListener('click', addEvent);
// }



// elementOl.addEventListener('click', (event) => {
//   event.target.classList.add('selectLi');
//   const selectedLi = document.querySelector('li');
//   console.log(selectedLi);
//   // if()
//   // event.target.classList.add('selectLi');
//   // const colorClass = document.querySelector('.selectLi');
//   // if(colorClass === null){
//   //   event.target.classList.add('selectLi');
//   // } else {
//   //   colorClass.classList.remove('selectLi');
//   //   event.target.classList.add('selectLi')
//   // }
//   // console.log(colorClass)
// });
// referencias: https://cursos.alura.com.br/forum/topico-pegar-valor-do-input-com-javascript-62528
// http://devfuria.com.br/javascript/dom-create-element/#:~:text=A%20fun%C3%A7%C3%A3o%20createElement()%20ir%C3%A1,createElement(tagName)%3B
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
// https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
