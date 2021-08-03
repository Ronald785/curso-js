//Ainda que n tenh sido definido os parametro e possível enviar
//Não funciona em arrow function
//arguments sustenta todos os argumentos, arguments[0] == 1;
function funcao() {
    //console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total); //28
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao1(a, b, c, d, e, f = 0) {
    console.log(a, b, c, d, e, f); //1 2 3 undefined undefined 0
}
funcao1(1, 2, 3); //mesmo tendo menos argumentos que parametros n gera erro
//defini o padrão que é undefined 

function funcao1(a, b = 2, c = 4) {
    console.log(a + b + c); 
} 
        //unica maneira de assumir o valor padrão do parametro
funcao1(2, undefined, 20); //24

//Atribuição via Desestruturação de objeto
function desestruturacaoObj({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Ronald', sobrenome: 'Almeida', idade: 19 };
desestruturacaoObj(obj);

//Atribuição via Desestruturação de arraw
function desestruturacaoArray([ valor1, valor2, valor3 ]) {
    console.log(valor1, valor2, valor3);
}
desestruturacaoArray(['Ronald', 'Almeida', 19]);

                                    //rest operator, ou seja, todo o resto
function conta(operador, acumulador, ...numeros) {
    // console.log(operador, acumulador, numeros); //+ 0 [ 20, 30, 40, 50 ]
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);

//A unica diferença de arrow function para uma normal é o this que vai modificar um pouco

const contaExpression = function(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros); //+ 1 [ 20, 30, 40 ]
};
contaExpression('+', 1, 20, 30, 40);

//Lembrando, arguments n funciona em arrow function, 
//mas existe o rest operator (funciona todos os tipos de funcções)
const contaArrow = (...args) => {
    console.log(args);
};
contaArrow('+', 1, 20, 30, 40); //[ '+', 1, 20, 30, 40 ]