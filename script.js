function paragrafo(){
  const texto1 = document.getElementById('funcionamento')
  texto1.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
}
paragrafo();

function listaOrdenada(){
  const pai = document.getElementById('lista')
  const filho = document.createElement('ol')
  pai.appendChild(filho)
  filho.id = 'lista-tarefas'
}
listaOrdenada();

function button(){
  const elemento = document.querySelector('button')
  elemento.id = 'criar-tarefa';
  elemento.addEventListener('click', () => {
  const pai = document.querySelector('ol');
  const filhoDePai = document.createElement('li');
  pai.appendChild(filhoDePai);
  const achandoInput = document.querySelector('#texto-tarefa')
  filhoDePai.innerText = achandoInput.value;
  achandoInput.value = ''
  })
}
button();
