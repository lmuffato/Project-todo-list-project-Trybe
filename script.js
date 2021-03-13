/* informações referentes ao input e ao button foram retiradas do
https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/jsref/dom_obj_pushbutton.asp */
// vamos criar o button do requesito 5
const myButton = document.createElement('button');
myButton.innerText = 'adicionar';
myButton.type = 'reset';
myButton.id = 'criar-tarefa';
document.getElementsByTagName('form')[0].appendChild(myButton);
// mudando o backgroundColor dos li
/* paro o requsito 8, houve a necessidade de mudar todos o back para white
e assim colorir o targey para grey */
// ta aqui por causa do chato do lint
const listItens = document.getElementById('lista-tarefas').children;
console.log(listItens);
function allToWhite() {
  for (let i = 0; i < listItens.length; i += 1) {
    listItens[i].style.backgroundColor = 'white';
  }
}
function changeToGrey(selectedItem) {
  const toGrey = selectedItem.target;
  allToWhite();
  toGrey.style.backgroundColor = 'rgb(128, 128, 128)';
}
// após criação do myButton e atribuir input ao ol
/* utilização da propriedade value do input
fonte : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text */
function receiveTask() {
  const taskToDo = document.createElement('li');
  taskToDo.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(taskToDo);
  taskToDo.addEventListener('click', changeToGrey);
}
myButton.addEventListener('click', receiveTask);
