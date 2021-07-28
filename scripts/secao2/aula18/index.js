//É possível alterar os valores do array no const
//Mas não reatribuir o array

// const array = [1,2,3];
// array.push(4);
// array[0] = 'Ronald';
// console.log(array);

/*Objeto Literal*/
/*
const objeto = {
    nome: 'Ronald',
    sobrenome: 'Almeida',
    idade: 19
};
*/

//Chamado de factory, função que cria objetos
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        //Valores com o mesmo nome é possível encurtar
        sobrenome,
        idade,
        //Método, funcão dentro de um objeto
        fala() {
            console.log(`${this.nome} ${this.sobrenome} mandou um sauve!`);
        },
        idadeAtual() {
            console.log(`${this.nome} tem ${this.idade} anos!`);
        },
        incrementaIdade() {
            ++this.idade;
        }
        
    };
}
                            //Argumento é valor que é passado para o parametro
const pessoa1 = criaPessoa('Ronald', 'Almeida', 19);
console.log(pessoa1.idade); //R: 19
pessoa1.fala(); //R: Ronald Almeida mandou um sauve!
pessoa1.idadeAtual(); //R: Ronald tem 19 anos!
pessoa1.incrementaIdade();
pessoa1.idadeAtual(); //Ronald tem 20 anos!
