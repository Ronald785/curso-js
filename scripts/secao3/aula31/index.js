//var pode ser redeclarada
//let não pode ser redeclarada
//let tem escopo de bloco { ... bloco }
//var só tem escopo de função 

const verdadeiro = true;

let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; //criando

if (verdadeiro) {
    let nome = 'Otávio'; //criando 
    var nome2 = 'Rogério'; //redeclarando
    //Isso acontece pq o V8 busca a variável 1º no bloco e dps vai o bloco maior
    //console.log(nome, nome2); // Otávio Luiz 
    if (verdadeiro) {
        let nome = 'Outra coisa'; //criando
        var nome2 = 'Ronald'; //redeclarando
    }
}

console.log(nome, nome2); // Luiz Ronald

var sobrenome = 'Almeida';

//Posso usar var criadas foras dentro da função
function falaOi(){
    console.log(sobrenome);
}
falaOi();

function testeOi() {
    var sobrenome = 'Miranda';

    if (verdadeiro) {
        let teste = 'Luiz';
        var teste2 = 'Roi'
        console.log(teste);
    }
    console.log(teste); //n funciona
    console.log(teste2);//Roi
}

testeOi();

//O Js faz elevação da variável var para o topo do arquivo
//Esse hoisting/elevação tbm ocorre com funções 
//então mesmo q ela seja usada antes de ser definida n retorna erro
//O hoisting n ocorre com let 
console.log(hoisting); //undefined

var hoisting = 'Teste';