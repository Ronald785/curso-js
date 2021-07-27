//Array é uma coleção de coisas
//Não é uma boa prática colocar tipos diferentes
//Strings são indexadas, ou seja, tem o indice de cada letra
//Arraus são indexados por element
const alunos = ['Luiz', 'Maria', 'João'];

//Alterando
// alunos[0] = 'Eduardo';

//Adicionando 
// alunos[3] = 'Luiza'
// alunos[alunos.length] = 'Fabio';

//Adiciona no final do Array
alunos.push('Ronald');

//Adiciona no começo
alunos.unshift('Gabriel');

//Removendo elemento do fim do array
//alunos.pop();
//Salvando elemento removido em um var
//const removido = alunos.pop();

//Removendo elemento do começo do array
const removido = alunos.shift();

//É possível apagar um indice sem mover os outros
// delete alunos[1];
//Como os indices n são alterado um deles é vázio

console.log(alunos);
console.log(removido);
console.log(alunos[1]); // Undefined

//É possível acessar indices que n existem 
// ou 
// n apontam para um loca na memória eles são undefined
console.log(alunos[50]);

//Fatiando Array
//Lembrando, o último elemento passado como referencia n é incluido
//Negativo começa do fim
console.log(alunos.slice(0, 3));

//Array é um objeto indexado
console.log(typeof alunos); // object

//Array é indexado automaticamente

//Idenficando se é array
console.log(alunos instanceof Array); // true é array