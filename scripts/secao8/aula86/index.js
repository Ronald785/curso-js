//Promisses

function rand(min, max) {
    min *=1000; 
    max *=1000;   
    return Math.floor(Math.random() * (max - min) + min);
}

//Antes seria callback, para executar em ordem
// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }
// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });

function esperaAi(msg, tempo) {
    //resolve deu certo e reject errado e pode capturar dps 
                    //por convenção os params recebem esses nomes
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg); //parametro único
        }, tempo);
    });
}
//Poderia ser conexão com o BD -> Buscando dados da base -> Tratando os dados -> Exbir na tela            
//Promisses executa em paralelo, código assíncrono
esperaAi('Frase 1', rand(1, 3))
    //Quando resolver a resolve, executa o then
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    //Capturar o erro
    .catch(e => {
        console.log('ERRO:', e);
    });   

console.log('Isso será exibido antes da promise.');

//Isso será exibido antes da promise.
//Frase 1
//Frase 2
//Frase 3