/*
Operadores Aritéticos
+  -> Adição e Concatenação
-  -> Subtração 
/  -> Divisão  
*  -> Multiplicação
** -> Potenciação
%  -> Resto da divisão
*/
/*
Ordem de precedencia
()
**
* / %
+ -
*/
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3)
let contador = 0;
contador++; // contador = contador + 1; //Incremento
//contador--; // contador = contador - 1; //Decremento
//Pode ser pós ou pré
//Pré, faz a conta e depois executa
//Pós, executa  ação e depois faz o incremento
let passo = 2;
contador += passo //contador = contador + passo; //Funciona com qualquer operador
console.log(contador);

//NaN - Not a Number //Na maioria o Js vai tentar resolver e n dar erro
const num4 = 'Ronald'
console.log(num1 * num4)
// Formar de converter String para número
const num5 = Number('10') //parseInt('5') //parseFloat('5.2') //Number('5.2')
console.log(num1 + num5);