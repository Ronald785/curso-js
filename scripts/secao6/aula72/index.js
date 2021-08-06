//Em ambos é possível definir tbm Getters e Setters
//G e S --> maneira de proteger propriedade
//Getter só retorna o valor
//Setter só configura o valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave 
        configurable: true, //apagar e configurável
        get: function () { 
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new Error('Erro valor é diferente de número!')
                // console.log('Erro valor é diferente de número!')
                // return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta',20, 3);

console.log(p1);
p1.estoque = 50; //só funciona se o valor for number
console.log(p1.estoque);//50

//Getters e Setters em Factory Function

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('PC');
console.log(p2); //{ nome: [Getter/Setter] }
console.log(p2.nome); //PC

p2.nome = 'Qualquer coisa';
console.log(p2.nome); //Qualquer