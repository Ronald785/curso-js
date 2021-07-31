// stack trace a explicação do erro
//try significa tentar
//se exister erro cai no bloco catch

//não exibir erro parao o usuário final 
//é possivel logar o erro em arquivo de log, salvar em uma base de dados ou qualquer coisa
try {
    console.log(naoExisto);
        //pode ser qualquer nome 
} catch (err) {
    console.log('naoExisto não existe');
    //exibe o erro
    console.log(err)
}
//É possível lançar nossos próprios, para por exemplo logar ele
// ou lançar para outro desenvolvedor capturar esse erro dps

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //throw('X e Y precisam ser números'); //só essa mensagem, sem as referencias
        //temos as classes de erro no js, funcao construtora posso criar minhas próprias 
        // ou estender
        throw new Error('X e Y precisam ser números'); //erro completo
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, 'a'));
} catch(error) {
    console.log(error);
}