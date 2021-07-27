let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let aux;

console.log(varA, varB, varC);
/*
Versão Antiga
aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

//Versão Moderna
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);