/*
try {
    //executada quando não há erros
} catch (e) {
    //executada quando há erros
} finally {
    //executa sempre
}
*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if(!data) {
        data = new Date();
    }

    return data.toLocaleString('pt-BR', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // console.log(e)
    //tratar erro
} finally {
    console.log('Tenha um bom dia.');
}
