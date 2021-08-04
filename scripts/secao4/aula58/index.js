//Funções Construtoras
//FC e Factory Funcion ambas criam objetos,, FF função normal que retorna objeto
// FF e FC -> ambos tem o trabalho de criar
//FC, cria objeto, retorna objeta -> Sempre inicia com letra maiúscula
//FC -> Pessoa (new), molde  para gerar novos objetos

//Inicia com maiúsculo o JS entende que é Construtora, o corpo é o objeto q será criado
function Pessoa(nome, sobrenome) {
    //atributos ou métodos privados, n está disponível no objeto
    const Id = 123456;
    const metodoInterno = () => {

    };

    //Atributos ou métodos públicos
    //Pesoa.nome = nome;
    this.nome = nome;
    this.sabrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome, 'sou um metodo');
    };
}
            //obrigatório new, usa maiúsculo para n esquecer que é construtora
            //new, cria um novo objeto vázio, faz o this apontar para o objeto e o retorna
const p1 = new Pessoa('Ronald', 'Almeida');
const p2 = new Pessoa('Maria', 'Souza');

console.log(p1.nome); //Ronald
p1.metodo(); //Sou um metodo
