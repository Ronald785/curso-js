//While
//Recomendado para situações que não se sabe quando ela terminará
//Função que gera um número aleatório

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    //return r.toFixed(0);
    return Math.floor(r);
};

const min = 1;
const max = 50;
let rand = random(min, max);

let i = 0;

rand = 10;
//Checa a condição e dps executa
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
    i++;
}
console.log(i, ' tentativas');

console.log('#############################')


let x = 0;
//executa uma vez e dps checa;
do {
    rand = random(min, max);
    console.log(rand);
    x++;
} while (rand !== 10);
console.log(x, ' tentativas');
