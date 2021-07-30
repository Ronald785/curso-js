//array de uma única dimensão pode ser chamado de vetor

const frutas = ['Pera', 'Maça', 'Uva'];

//Esse for lê o indice do array //Em objetos ele lê as chaves
for (let i in frutas) {
   // console.log(frutas[i]);
}

const pessoa = {
    nome: 'Ronald',
    sobrenome: 'Almeida',
    idade: 19
};

//console.log(pessoa.nome); Ou
//const chave = 'nome';
//console.log(pessoa[chave])

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
/*
nome Ronald
sobrenome Almeida
idade 19
 */