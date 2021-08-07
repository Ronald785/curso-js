//Prototypes 
//Base q o JS utiliza para trabalhar com herança

//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome; //atributo/membro
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;//método
}

//Prototype é um obj q automaticamente está atrelado a função construtora 
//Interessante usar em métodos que fazem a msm coisa para todos objetos
//Primeiro olha o corpo do obj dps o proto
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

//pessoa1.__prot__ === Pessoa.prototype

//instância -> criando novos objetos
const pessoa1 = new Pessoa('Ronald', 'Almeida'); //<= Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

//Cadeia: Ondo o motor do JS vai buscar os membros/propriedades/métodos
//pessoa1 -> Pessoa.prototype -> Object.prototype

/*
JS é baseado em protótipos para passar propriedasdes e métodos de um obj para outro

Protótipo é termo para se refir ao que foi criado pela primeira vez, servindo de modelo
ou molde para futura produções.

Todos os objetos tem uma refência interna para um protótipo(__proto__)
que vem da propriedade prototype da função construtora que foi usada para 
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS
vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos 
é usada até o topo (null) até encontrar (ou não) tal membro.
*/

const data = new Date();
//Cadeia: Ondo o motor do JS vai buscar os membros/propriedades/métodos
//data -> Date.prototype -> Object.prototype
console.log(data.toLocaleDateString());

console.log(pessoa1.nomeCompleto());