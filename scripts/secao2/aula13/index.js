/*
*   É possível escapar o caracter, ou seja, 
*   ter aspas duplas dentro de aspas duplas
*   
*   let string = "Um \"texto\""; 
*   
*   R: Um "texto"
*/
//Para ter uma barra invertido no texto são necessários duas \\

/*
*   Strings são indexadas
*   O texto é iterado
*   O indice 0 representa o primeiro elemente
*   console.log(string[2]); //R: t
*/

let string = "Um texto";
//console.log(string.charAt(4)); //R:e

/*
*   CONCATENANDO 3 Formas
*
*   console.log(string.concat(', em um lindo dia.'))
*   console.log(string + ', em um lindo dia.') 
*   console.log(`${string}, em um lindo dia.`)
*
*   R: Um texto, em um lindo dia.
*/

/*
*   ENCONTRAR PALAVRAS
*
*   Para descobrir em qual indice comeca a palavra texto
*   console.log(string.indexOf('texto'));
*
*   Encontrar depois de certo indice
*   console.log(string.indexOf('texto', 3));
*
*   Começa de trás para frente 
*   console.log(string.lastIndexOf('texto'));
*/

//Expressões regulares 
//match, search e replace
// Retorna todas as letras minusculas 
//console.log(string.match(/[a-z]/g));
//R: [ 'm', 't', 'e', 'x', 't', 'o' ]
//Retorna a primeira letra
//console.log(string.match(/[a-z]/));
//R: [ 'm', index: 1, input: 'Um texto', groups: undefined ]

//SEARCH
//Retorna onde o indice que eu pedi foi encontrado
//console.log(string.search(/[a-z]/));
//R: 1
//Semelhante ao indexof, mas ele aceita expresões regulares
//console.log(string.search(/x/));
//R: 5

//REPLACE
//console.log(string.replace('Um', 'Outra'));
//R: Outra texto
//console.log(string);
//R:Um texto
let umaString = 'O rato roeu a roupa do rei de roma.';
//Sem o g substitui apenas a primeira ocorrencia 
//console.log(umaString.replace(/r/g, '#'));
//R: O #ato #oeu a #oupa do #ei de #oma. 
//console.log(umaString.length);

//FATIANDO STRINGS
//Definir onde começa e onde termina, vale destacar,
//Negativo começa pelo último
//console.log(umaString.slice(2, 6));
//R: rato
//console.log(umaString.length - 3)
// console.log(umaString.slice(-3));
// console.log(umaString.slice(32));
//console.log(umaString.slice(-5, -1));
//R: roma
//substring faz o mesmo mas é necessário especificar o tamanho
//console.log(umaString.substring(umaString.length - 5, umaString.length - 1))
//R: roma

//DIVIDINDO PALAVARS
//console.log(umaString.split(' '))
//R: ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.']
//Limitando
//console.log(umaString.split(' ', 2))
//R: ['O', 'rato']

//Tudo Maisuscúlo 
console.log(umaString.toUpperCase());
//R: O RATO ROEU A ROUPA DO REI DE ROMA.
//Tudo Minuscúla 
console.log(umaString.toLowerCase());
//R: o rato roeu a roupa do rei de roma.
