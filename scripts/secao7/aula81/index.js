//Getters e Setters    
//Dado primitivo simbol, pode ser usado para criar uma chave privada no objeto

const _velocidade = Symbol('_velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }
    
    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <+ 200; i++) {
    c1.acelerar();
} //Carro { nome: 'Fusca',[_velocidade]: 100 }

// c1.velocidade = 2000; //Carro { nome: 'Fusca', velocidade: 2000, [Symbol(_velocidade)]: 100 }

console.log(c1); //Carro { nome: 'Fusca', [Symbol(_velocidade)]: 100 }
console.log(c1.velocidade);//100

c1.velocidade = 50;
console.log(c1.velocidade);//50

class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
                        //pega o primeiro elemento do array
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Ronald', 'Almeida');
console.log(p1.nomeCompleto); //Ronald Almeida

p1.nomeCompleto = 'Naruto Uzumaki Hyuga'
console.log(p1.nomeCompleto); //Naruto Uzumaki Hyuga

