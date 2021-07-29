//For clássico 

//console.log('Linha 0);
//console.log('Linha 1);
//console.log('Linha 3);

//checando se o número é par
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//Percorrendo array
const frutas = ['Maça', 'pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}