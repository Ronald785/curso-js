//Retorne a soma do dobro de todos os pares    
//-> Filter pares 
//-> Map dobrar os valores
//-> Reduce (somar tudo) 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros.filter(valor => valor % 2 === 0);
const dobrar = pares.map(valor => valor*2);
const somar = dobrar.reduce((acumulador, valor) => acumulador += valor);

console.log(pares);
console.log(dobrar);
console.log(somar);

//Resultado Luiz
console.log('####### LUIZ ########');

const resultado = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor*2)
    .reduce((ac, valor) => ac + valor);
    
console.log(resultado);