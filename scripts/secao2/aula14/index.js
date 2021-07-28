//IEEE 754-2008
//AS contas do JavaScript seguem o padrão acima
let test1 = 0.7;
let test2 = 0.1;

test1 += test2;
test1 += test2;
test1 += test2;

test1 = Number(test1.toFixed(2));
//Ou
//test1 = parseFloat(test1.toFixed(2));
//Ou
// test1 = ((test1 * 100 ) + (test2 * 100)) / 100;
// test1 = ((test1 * 100 ) + (test2 * 100)) / 100;
// test1 = ((test1 * 100 ) + (test2 * 100)) / 100;

console.log(test1); //0.999999999
console.log(Number.isInteger(test1)); //



// let num1 = 10;
// let num2 = 2.5;

//toString() transforma em String
// console.log(num1.toString() + num2); //R: 102.5
// console.log(typeof num1); /R: number

//Transforma em binário
// console.log(num1.toString(2)); //R: 1010

// let num = 10.5789485151
//Limitando as casas decimais
// console.log(num.toFixed(2))

//Verificar se o número é do tipo inteiro
// console.log(Number.isInteger(num1)); //R: true

//Tratar números
// let temp = num1 * 'Ola';
// console.log(temp); //NaN
// console.log(Number.isNaN(temp)); //R: true //NaN Não é um Numero