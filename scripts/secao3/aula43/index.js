/*
Escreva uma função que um numero e retorne o seguinte:
Num é divisível por 3 = Fizz
Num é divisível por 5 = Buzz
Num é divisível por 3 e 5 = FizzBuzz
Num n é divisível por 3 e 5 = Retorna o próprio número
Checar se o num é realmente um num = retorna o proprio numero
use a funcao com numeros de 0 a 100

*/
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
