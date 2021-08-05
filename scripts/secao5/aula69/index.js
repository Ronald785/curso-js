//forEach
//Forma diferente de iterar sobre arrays

const array = [10, 20, 30];

// array.forEach(function(valor, indice, array) {
//     console.log(valor, indice);
// });
let total = 0;
array.forEach(valor => total += valor);

console.log(total);//60