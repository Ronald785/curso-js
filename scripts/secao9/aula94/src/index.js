import { nome as nome2, sobrenome, idade, Pessoa} from './modulo1'
//renomeando a variável importada com outro nome " as  "

import * as meuModulo from './modulo1';
//importa tudo em um objeto

import padrao from './modulo1';
//importa o padrão do módulo

const nome = 'João';

const p1 = new Pessoa('Ronald', 'Almeida');

console.log(nome)
console.log(nome2, sobrenome, idade);
console.log(p1);

console.log(meuModulo);

console.log(padrao(5,5));