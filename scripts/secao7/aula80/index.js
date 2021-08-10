//Classe -> Forma diferente de escrever um função construtora
//Os métodos da classe vão automaticamente para o prototype

class Pessoa {
    //Método para passar parametros para classe
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }

    comer() {
        console.log(`${this.nome} está comendo!`);
    }

    beber() {
        console.log(`${this.nome} está bebendo!`);
    }

}
//instanciar é criar um objeto a partir de uma classe (molde)
const p1 = new Pessoa('Ronald', 'Almeida');
console.log(p1); //Pessoa { nome: 'Ronald', sobrenome: 'Almeida' }
console.log(p1.falar());//Ronald está falando!
//O mesmo código com função construtora

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando!`);
};

Pessoa2.prototype.comer = function () {
    console.log(`${this.nome} está comendo!`);
};

Pessoa2.prototype.beber = function () {
    console.log(`${this.nome} está bebendo!`);
};

const p2 = new Pessoa2('Maria', 'Joaquina');

console.log(p2);//Pessoa2 { nome: 'Maria', sobrenome: 'Joaquina' }
console.log(p2.falar());//Maria está falando!
