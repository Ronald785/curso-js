//Manipulando Prototypes

//objA.__proto_ === Object.prototype

//new Object ou Literal ↓
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

//objB.__proto__-> obgA.__proto__-> Object.prototype
const objB = {
    chaveB: 'B'
    //__proto__: objA
};

//objC.__proto__-> objB.__proto__-> obgA.__proto__-> Object.prototype
const objC = new Object();
objC.chaveC = 'C';

//Configurando Proto
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);//A
console.log(objC.chaveA);//A

//NÂO RECOMENDANDO USAR objA.__proto__
//SE FOR PRECISO USE Object.getPrototypeOf(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * (percentual /100));
};

Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * (percentual /100));
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(100);
console.log(p1);//Produto { nome: 'Camiseta', preco: 100 }
p1.desconto(100);//
console.log(p1);//Produto { nome: 'Camiseta', preco: 0 }

//Literal 
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(p2);//Produto { nome: 'Caneca', preco: 22.5 }

//Criando obj e configurando o prototype
                        //Object.prototype //Chaves e configurações das chaves
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
});

p3.aumento(10);
console.log(p3); //Produto { tamanho: 42, preco: 110 }