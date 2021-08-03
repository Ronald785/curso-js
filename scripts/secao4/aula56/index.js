//Factory Functions (Função Fábrica)
//Constructor function (Função Construtora)
//Funções que retorna objetos
//Método -> função dentor do objeto
//this sempre vai se referir a pessoa que chamou o q eu estou executando

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,

        sobrenome,

        //Setter
        set nomeCompleto(valor){
                        //divindo string em array
            valor = valor.split(' ');
                             //remove o primeiro elemento do array
            this.nome = valor.shift();
                            //array em string com espaço
            this.sobrenome = valor.join(' ');
        },

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        fala: function (assunto = 'falando sobren nada') {
                    //nessa caso o this é p1
            return `${this.nome} está ${assunto}!`;
        },

        altura,

        peso,

        //Fingindo que o metodo é atributo, só obtém o valor
        //Getter, porém deixa de poder alterar o valor: p1.imc = 30 (n funciona)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ronald', 'Almeida', 1.75, 68);
const p2 = criaPessoa('Gabriel', 'Medina', 1.8, 77);
console.log(p1);
console.log(p1.fala('falando sobre JS'));
p1.nomeCompleto = 'Naruto Uzumaki Namikaze'
console.log(p1.nomeCompleto);
console.log(p1.imc);
console.log(p2.imc);

