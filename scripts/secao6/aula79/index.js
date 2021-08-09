//Factory Functions + Prototypes

//Código aclopado 
/*
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        }
    }
    return Object.create(pessoaPrototype, {
        nome: { value: nome }, 
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Ronald', 'Almeida');
console.log(p1);
*/

//Desaclopando
//Compoando um objeto com outtros objetos
//Chamado de composição
//mixing -> jogando em objeto, sem ter herança e hierárquia
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = { ...falar, ...comer, ...beber };
//const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome }, 
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Ronald', 'Almeida');
console.log(p1);