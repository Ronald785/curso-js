//Async e Await

function rand(min=0, max=3) {
    min *=1000; 
    max *=1000;   
    return Math.floor(Math.random() * (max - min) + min);
}

//Só simula a espera de algo
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') return reject('Erro!');

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

/*
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 3', rand());
    })
    .then(valor => {
        console.log(valor);
    })
    .catch(e => console.log(e));
*/
//Async permitee usar await dentro de um função para esperar a promise ser finalizada 
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi(3, rand());
        console.log(fase3);
    
        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();


/*
Estados da promise
pending (Pendente): ainda está sendo executada e ainda n retornou o valor
fulfilled (Realizada): sucesso na operação.
rejected (Rejeitado): falha na operação.
*/