/*Atribuição via desistruração*/
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//[a, b, c] = [b,c,a];
//        OU
const numeros = [b,c,a];
[a, b, c] = numeros;

console.log(a, b, c);// B C A

//indice      0  1  2  3  4  5  6  7  8
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //aqui são os valores
const primeiro = nums[0];
const segundo = nums[1];

//A atribuição via desestruturação veio para facilitar isso
//Antes seria necessário criar 9 vars 

//Esse operador no sentido de pegar o resto chama rest operator
//Se fosse espalhar seria ...spread
//O q muda é contexto
//Para pular usar espaço vázio
                                //Tbm é possível pegar o resto do array
const [primeiroNumero, , terceiroNumero, ...resto] = nums;

console.log(primeiroNumero, terceiroNumero); // 1 3
console.log(resto); // [2, 4, 5, 6, 7 , 8, 9]

//  Array de arrays
//                 0           1          2
//               0  1  2    0  1  2    0  1  2
const array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

//acessando o 6
console.log(array[1][2]);// 6

//Além disso, tbm é possível fazer a desestruturação
const [,[,,seis]] = array;
console.log(seis); //6

//ou 

const [lista1, lista2, lista3] = array;
console.log(lista2[2]); //6