//Atribuição via desestruturação de Objetos

const pessoa = {
    nome: 'Ronald',
    sobrenome: 'Almeida', 
    idade: 19,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição normal
// const nome = pessoa.nome;
// console.log(nome); //Ronald

//Atribuição via desestruturação
                                //se n existe é possivel setar um padrão 
                                //tbm funciona em array esse padrão
const { nome: teste, sobrenome, idade, existe = 'N existe'} = pessoa;
console.log(teste, sobrenome, idade, existe); //Ronald Almeida 19 N existe

                                    //pegando o objeto completo tbm
const { endereco: { rua: r, numero: n}, endereco } = pessoa;
console.log(r, n, endereco); //Av Brasil 320 { rua: 'Av Brasil', numero: 320 }

//Resto
const pessoa1 = {
    nome: 'Naruto',
    sobrenome: 'Uzumaki', 
    idade: 25,
    endereco: {
        rua: 'Vale do Fim',
        numero: 245
    }
};

const { nome, ...resto} = pessoa1;
console.log(resto); 
/*{
    sobrenome: 'Uzumaki',
    idade: 25,
    endereco: { rua: 'Vale do Fim', numero: 245 }
  }
*/