//exportando e criando a variável diretamente
export const nome = 'Ronald';
export const sobrenome = 'Almeida';
export const idade = 19;

const cpf = 115555156161;
//cpf não é exportado, ou seja, é uma vaar privada desse módulo

//Somente um padrão por módulo, se n especificar o nome importada vai importar o padrão
export default (x, y) => x * y;

export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.somenome = sobrenome;
    }
}

//exportando variáveis 

// export { nome, sobrenome, idade, soma };

//exportando com outro nome " as "

//exportando var como default
//export { nome as default, sobrenome, idade, soma };