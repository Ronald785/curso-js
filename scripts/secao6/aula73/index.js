/* Métodos Úteis para Objetos

Object.values (retorna os valores)
Object.entries (retorna as chaves e os valores cada elemento em um array)
Object.assgin(des, any) (copiar obj)
Object.getOwnPropertyDescriptor(o, 'prop') //exibir as configurações da propriedade
... (spread)

//Já vimos
Object.Keys(obj) (retorna as chaves) // Array com as chaves
Object.freeze(obj) (congela o objeto) //Impede alterar o valor
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
 */

//Copiando objetos
const produto = { nome: 'Caneca', preco: 1.8 };
                    //...spread operator
const copiaProduto = { ...produto, material: 'parcelana' };

//2º forma de copiar
const copiaProduto1 = Object.assign({}, produto, {material: 'alumínio'});

//3º Forma manual
const copiaProduto2 = { nome: produto.nome, preco: produto.preco };


copiaProduto.preco = 2.5;
copiaProduto1.preco = 5.0;

console.log('Produto: ', produto);//Produto:  { nome: 'Caneca', preco: 1.8 }
console.log('Copia Produto: ', copiaProduto);//Copia Produto:  { nome: 'Caneca', preco: 2.5, material: 'parcelana' }
console.log('Copia Produto 1: ', copiaProduto1);//Copia Produto 1:  { nome: 'Caneca', preco: 5, material: 'alumínio' }

console.log('Configuração', Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log('Chaves', Object.keys(produto));//Chaves [ 'nome', 'preco' ]
console.log('Valores', Object.values(produto));//Valores [ 'Caneca', 1.8 ]
console.log('Chaves e Valores', Object.entries(produto));//Chaves e Valores [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ] ]

//Destuctor
            //valor
for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
    // console.log(valor[0], valor[1]);
}