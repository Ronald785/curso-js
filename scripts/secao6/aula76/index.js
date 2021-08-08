//Herança

//Produto -> aumento, desconto
//Camiseta = Cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

//Especializando 
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); //Herda tudo de produto
    this.cor = cor;
}
//Antes era -> Camiseta.prototype.constructor = Camiseta;
//Criando obj e configurando o prototype
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; //Defininfo o constructor de Caneca como Caneca

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual /100));
};

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 100, 'Preta');

//para funcionar precisa pegar o prototype do produto
// camiseta.aumento(10); console.log(camiseta); //Camiseta { nome: 'Regata', preco: 110 }
console.log(produto); 
console.log(camiseta); 
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Chique', 50, 'Ferro', 5);

caneca.estoque = 100; //usando setter
console.log(caneca);  
console.log(caneca.estoque);//100 //usando getter 

