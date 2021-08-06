//Object.defineProperty() e Object.defineProperties()
//defineProperty -> Travar/Impedir que uma propriedade seka alterada
//defineProperties -> define Várias 
//Em ambos é possível definir tbm Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;
                    //Params -> 1º obj, 2º nome da propriedade, 3ºproperty descriptor-> 1 obj
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //true - mostra chave - exibir quando chamar obj
        value: estoque, //valor
        writable: true, //true - pode alterar valor da propriedade
        configurable: false, //true - apagar e configurável / False -> impede o código abaixo funcionar
    });
                            //configurable -> Permite reconfigurar 
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, 
    //     value:estoque, 
    //     writable: false, 
    //     configurable: true, 
    // });

    Object.defineProperties(this,{
        nome: {
            enumerable: true, 
            value: noem, 
            writable: false, 
            configurable: true, 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false, 
            configurable: true, 
        }
    });
}

const p1 = new Produto('Camiseta',20, 3);
//Propriedade pública, posso acessar forá do objeto
// console.log(p1.nome);
p1.estoque = 500;
delete p1.estoque; //N funciona com configurable false
console.log(p1);//Produto { nome: 'Camiseta', preco: 20, estoque: 500 }

//Visualizar as chaves dos objs em um Array
console.log(Object.keys(p1)); //[ 'nome', 'preco', 'estoque' ]