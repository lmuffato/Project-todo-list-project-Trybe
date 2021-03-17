// Ajuda do Andy e Aníbal. Vou estudar javascript para ficar tudo muito bem claro. CSS e HTML para mim está tudo ótimo. Vou correr atrás do prejuízo no javascript.

function adicionaTarefa() {
    const botao = document.getElementById('criar-tarefa');
    botao.addEventListener('click', (e) => {
        const taskList = document.getElementById('lista-tarefas');
        const entrada = document.getElementById('texto-tarefa');
        if (entrada.value !== '') {
            const listaCriada = document.createElement('li');
            taskList.appendChild(listaCriada);
            listaCriada.innerHTML = entrada.value;
            entrada.value = '';
        }
    });
  
}
  
