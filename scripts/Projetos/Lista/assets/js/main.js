const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');

    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();
})

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        //console.log(el.parentElement);
                        //removendo elemento
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    //console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
                                //substituir           //remove espaços sobrnado
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        // console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }
    //transformando em JSON //foi criado uma string do array convertido para JSON
    //Dps é possivek converter em array novamente
    const tarefasJSON  = JSON.stringify(listaDeTarefas);
    // console.log(tarefasJSON);
    //local no navegador para salvar dados
                      //nome para recuperar o valor, só é possível salvar Strings 
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    // console.log(tarefas);
    const listaDeTarefas = JSON.parse(tarefas);
    // console.log(listaDeTarefas);
    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas() 