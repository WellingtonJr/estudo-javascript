var adicionarWrapper = document.getElementById('adicionar');

adicionarWrapper.addEventListener('click',adicionaTarefa);

var divTarefas = document.getElementById('lista-tarefas');

var contador = 0;

function adicionaTarefa(){
    var tarefa = document.getElementById("tarefa");
   

    var inputTarefa = document.createElement('input');
    inputTarefa.setAttribute('type','checkbox');
    inputTarefa.setAttribute('id',contador);

    var labelInputTarefa = document.createElement('label');
    labelInputTarefa.setAttribute('for',contador);
    labelInputTarefa.setAttribute('class','label-input-tarefa')
    labelInputTarefa.innerText = tarefa.value;
    contador++;

    var divNovaTarefa = document.createElement('div');
    divNovaTarefa.setAttribute('class','tarefa-checkbox');

    divNovaTarefa.appendChild(inputTarefa);
    divNovaTarefa.appendChild(labelInputTarefa);

    divTarefas.appendChild(divNovaTarefa);
    
}

