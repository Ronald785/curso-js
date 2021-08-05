//Revisando Objetos
//Chave é aquilo que é utlizada para acessar o valor dentro do objeto
//nome e sobrenome são chaves

const objeto = {
    nome : 'Ronald', 
    sobrenome: 'Almeida'
};

//Acessando objetos
console.log(objeto.nome);//Ronald

//É possivel utilizar chave dinamica 
const chave = 'sobrenome'
console.log(objeto[chave]);//Almeida

//Criando objeto com construtor
const obj = new Object();
obj.nome = 'Oscar';
obj.sobrenome = 'Carvalho';
obj.idade = 19;

console.log(obj.nome);//Oscar
console.log(obj.sobrenome);//Carvalho

//Apagando a chave nome
delete obj.nome;
console.log(obj);//{ sobrenome: 'Carvalho', idade: 19 }

//Métodos -> Funções dentro do objeto que executam ações
//Vantagem -> ter acesso aos dados do objeto dentro da função

obj.falaNome = function() {
    console.log(`${this.sobrenome} está se apresentando!`);
};
//Tenho algo dentro do objeto que pode manipular os valores
obj.getDataNascimetno = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
obj.falaNome();//Carvalho está se apresentando!

console.log(obj.getDataNascimetno());//2002

//Inspecionando chaves de OBJ
for (const chave in obj) {
    console.log(chave); //sobrenome idade falaNome getDataNascimetno
};

//Inspecionando os valores das chaves de OBJ
for (const chave in obj) {
    console.log(obj[chave]); //Carvalho 19 [Function (anonymous)] [Function (anonymous)]
};

//Funções para criar moldes para novos objetos
//Factory Function e Constructor Function -> São padrões de projetos que eu posso usar
//CLasses avstraem a dificuldade que utilizar os citados na linha anterior

//Factory F -> função que cria algo

function criaPessoa(nome, sobrenome) {
    return { 
        nome, 
        sobrenome,
        //esse métdo simular ser um atributo/propriedade //Além disso, n consigo setar ele
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
};

const pessoa = criaPessoa('Ana', 'Maria')

console.log(pessoa.nomeCompleto);//Ana Maria

//Constructor Function

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//A paalvra new cria um objeto vázio {}
//Pega a palavra this (É chave, n variável) e atrelar this dentro dessa função ao obj
//E retorna esse this
const pessoa1 = new Pessoa('Naruto', 'Uzumaki');

//mesmo sendo const n altero o valor da variável, eu altero o valor do valor da variável
pessoa1.nome = 'Hinata'

console.log(pessoa1); //Pessoa { nome: 'Hinata', sobrenome: 'Uzumaki' }

//impedir que o valor um objeto seja alterado
Object.freeze(pessoa1);
pessoa1.nome = 'Boruto';
console.log(pessoa1);// continua sendo Hinata

//Travando todos os obj de determinado Constructor

// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;

        //Object.freeze(this); //travando o this
// }