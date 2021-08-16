//Métodos úteis para Promises

function rand(min, max) {
    min *=1000; 
    max *=1000;   
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') return reject('Erro!');

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

//Promise.all - Promise.race - Promise.resolve - Promise.reject

//Promise.all, passa um array com promeses resolvidas, ele entrega um array com os valores das promises

const promisesArray = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    // esperaAi(1, 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];
/*
Promise.all(promisesArray)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });
*/
/*  Se um promisse der erro vai direto pro catch e retorna somente Erro!
    [
        'Primeiro valor',
        'PROMISE 1 - Passei na promise',
        'PROMISE 2 - Passei na promise',
        'PROMISE 3 - Passei na promise',
        'Outro valor'
    ]
*/
//Promise.race, passa um array de promise e a primeira que resolver entrega o valor
//Se a 1º q resolver n rejeitar entrega o valor
/*
const promisesRace = [
    esperaAi(1, rand(1, 5)), //erro
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promisesRace)
    .then(valor => {
        console.log(valor);
    })
    .catch(error => {
        console.log(error);
    });
*/

//Promise.resolve 
/*
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    }
    else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(error => {
        console.log(error);
    });
*/

/*
true -> Página em cache
false -> BAIXEI A PÁGINA - Passei na promise
*/

//Promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    }
    else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(error => {
        console.log('ERRO', error);
    });