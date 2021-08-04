//Filter - Filtrando Array
//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne os nº mmaiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callback(valor, indice, array) {
//     if(valor > 10) {
//         return true;
//     } else{
//         return false;
//     }
// }

//condição já retorna um boolean
// function callback(valor) {
//     return valor > 10;
// }
//                             //recebe uma função de callback que itera em cada elemento
//                             //Precisa retornar boolean(true) para embutir no array 
// const numerosFiltrados = numeros.filter(callback); //[ 50, 80, 11, 15, 22, 27 ]

                                        //Função anônima 
// const numerosFiltrados = numeros.filter(function (valor) {
//     return valor > 10;
// });
                                        //Arrow function -> com uma linha o return é implicito
const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);//[ 50, 80, 11, 15, 22, 27 ]



//Retorne as pessoas que tem o nome com 7 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},

];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
// const pessoasTerminaA = pessoas.filter(obj => {
//     return obj.nome.lastIndexOf('a') === obj.nome.length - 1
// });
                                                                        //termina com
const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasNomeGrande);
console.log(pessoasIdade);
console.log(pessoasTerminaA);


