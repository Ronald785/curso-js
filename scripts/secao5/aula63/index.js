//Método Splice
//array.splice(x, y, elem1, elem2) 
//x-> onde começa //y->quantos elementos quero remover
//elem -> elementos para adicionar 
//splice(índice atual, delete, elem1, elem2);

//              -5        -4       -3         -2        -1
//               0         1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// const removidos = nomes.splice(4, 1); //Difernte de pop que retorna elemento, splice retorna array
// console.log(nomes, removidos); //[ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]

// console.log(Number.MAX_VALUE); //1.7976931348623157e+308 -> maior nº no JS

// const removidos = nomes.splice(-2, Number.MAX_VALUE); //removendo de um lugar até o fim
// console.log(nomes, removidos); //[ 'Maria', 'João', 'Eduardo' ] [ 'Gabriel', 'Júlia' ]

// const removidos = nomes.splice(3, 0, 'Ronald'); //adiciona no indice 3 
// console.log(nomes, removidos); //[ 'Maria', 'João', 'Eduardo', 'Ronald', 'Gabriel', 'Júlia' ] []

//pop -> remove último
// const removidos = nomes.splice(-1, 1); 
// console.log(nomes, removidos); //[ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]

//shift -> remove o 1º
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos); //[ 'João', 'Eduardo', 'Gabriel', 'Júlia' ] [ 'Maria' ]

//unshift -> adiciona no 1º 
// nomes.splice(0, 0, 'Ronald', 'Almeida');
// console.log(nomes); //[ 'Ronald', 'Almeida', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ] 

//push ->adicional no final do array
nomes.splice(nomes.length, 0, 'Ronald');
console.log(nomes); //[ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Ronald' ] 