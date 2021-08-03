//Retorno da Função
//return, retorna um valor e termina a função;

//alert('Olá Mundo!'); //undefined //n retorna nada, mas exibe uma mensagem que é lago útil

//N retorna nda mas muda a cor de fundo do body
/* 
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
*/

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome: sobrenome };
}
const p1 = criaPessoa('Ronald', 'Almeida');
const p2 = {
    nome: 'João',
    sobrenome: 'Henrique'
}
console.log(p1); //{ nome: 'Ronald', sobrenome: 'Almeida' }
console.log(p2); //{ nome: 'João', sobrenome: 'Henrique' }

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    //retorna a funcao sem executar ela é retornar a funcao em si 
    return falaResto;
};

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo); //[Function: falaResto]
// console.log(olaMundo('mundo!')); //Olá mundo!
const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

/*
function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}
*/

function criaMultiplicador(multiplicador) {
    //multiplicador nesse escopo
    return function(n) {
        // a funcao lebra do seu escopo no momento da criação
        return n * multiplicador;
    };
}
//Exemplo de função closure, fecha o escopo mesmo dps de ter sido usado
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));//4
console.log(triplica(2));//6
console.log(quadriplica(2));//8

//É possível retornar qualquer coisa na função, uma outra função, um ojeto
//os valores primitivos(mais comum), pode rretornar um setInterval, como no timer
//retornei ele e usei para pausar ou parar
