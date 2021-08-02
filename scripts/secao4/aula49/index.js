//Declaração de funcao (Function hoisting), elevação função e var 
falaOi();
function falaOi() {
    console.log("Oi!");
}

//Elas são First-class objects, pode ser tratada como dados, 
//podemos passar para outra funcao, retornar ela...
//Function expression, jogar uma função em uma variavel
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado(); //Sou um dado.

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo!')
    funcao(); //está executando um parametro
};

executaFuncao(souUmDado);

//Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();

//Dentro de um objeto, jogando uma funcaoo como metodo do objeto
const obj = {
    //falar: function() {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();