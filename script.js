function adicionarItem() {
  const pegarBotao = document.querySelector('#criar-tarefa');
  const pegarTagTextoTarefa = document.querySelector('#texto-tarefa');
  pegarBotao.addEventListener('click', function(event) {
  const escreverTarefa = document.querySelector('input').value;
  if(escreverTarefa != ''){
    const criarTopico = document.createElement('li');
    criarTopico.className = 'criarTopico';
    criarTopico.innerHTML = escreverTarefa;
    const listaTarefa = document.querySelector('#lista-tarefas');
    listaTarefa.appendChild(criarTopico);
    pegarTagTextoTarefa.value = null;
  }
  alert('Por Favor Amigão, insira alguma tarefa!!');
  });
}
adicionarItem();

