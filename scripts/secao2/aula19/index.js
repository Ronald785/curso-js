/* 
Tipos de Dados Primitivos

String, Number, Boolean, Undefined, Null (Bigint, Symbol)

Eles são valores imutáveis. O valor é copiado

let nome = 'Ronald';
nome = 'João'

Apenas o valor da variável foi trocado
            012345
let nome = 'Ronald';
nome[0] = 'L'
console.log(nome[0], nome) //R: R, Ronald

A String é imutável

A variável é só uma caixa que contém o valor

*/
/*
//Valor é copiado
let a = 'A';
let b = a; 
a = 'Outra coisa'
console.log(a, b); //R: Outra coisa A
*/

// Dado Passado por Referência (mutável) - array, object, function

let c = [1, 2, 3];
let d = c;

c.push(4)
//Apontam para o mesmo endereço na memória
console.log(c, d); //R: [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

d.pop();

//Para realmente copiar o valor, ao invés da referencia
let e = [...c]; 

console.log(c, d); //R: [ 1, 2, 3] [ 1, 2, 3]

//Objetos
const objetoA = {
    nome: 'Ronald',
    idade: '19'
};

const objetoB = {...objetoA}

objetoA.nome = 'Henrique';

console.log(objetoA.nome); //R: Henrique
console.log(objetoB.nome); //R: Ronald
