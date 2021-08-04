//Concatenando Arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// //1º Forma
// const a3 = a1.concat(a2, [7, 8, 9], 'Ronald', 'Almeida');
// console.log(a3); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Ronald', 'Almeida' ]

//2º Forma
//... -> spread operator, espalha o array ->Tbm funciona em Objetos

const a3 = [...a1, ...a2, ...[7, 8, 9], 'Ronald', 'Almeida'];
console.log(a3); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Ronald', 'Almeida' ]