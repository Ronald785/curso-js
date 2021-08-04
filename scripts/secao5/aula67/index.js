//Reduce - Reduzindo o array
// Mais utilizada para reduzir o array para um elemento
                                                            //valor inicial do acumulador
                                                            //opcional, se no for passado 
                                                            //será o 1º item do array
//array.reduce(function (acumulador, valor, indice, array) { Código }, 0)

//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro de valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     return acumulador += valor;
// },0);

const total = numeros.reduce((acumulador, valor) => acumulador += valor, 0);
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador;
}, []);

console.log(total); //236
console.log(pares); //[ 50, 80, 2, 8, 22 ]
console.log(dobro); //[10, 100, 160,  2,  4,  6, 10,  16,  14, 22, 30, 44, 5]


//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 100},
    {nome: 'Wallace', idade: 104},
];

const velha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor; //acumulador passa a ser o valor
})

console.log(velha);

