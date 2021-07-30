// For clássico - Geralmente com interávei (array ou string)
// For in - Retorna o índice ou chave (string, array, ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou string)
const nome = ['Ronald Almeida', 'Luiz', 'Mateus'];

console.log('###FOR CLASSICO###');
//Utiliza o indice
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('#####FOR IN#####');
//Utiliza o indice
for (let i in nome) {
    console.log(nome[i]);
}

console.log('#####FOR OF#####');
//N é possivel usar objetos, pq eles n são iteraveis
//Utiliza o valor ao invés do indice
for (let valor of nome) {
    console.log(valor);
}

console.log('#####FOR EACH#####');
nome.forEach(function (valor, indice, array) {
    console.log(indice, valor, array);
});