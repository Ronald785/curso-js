//Break e Continue
//Continue -> continua para a próxima iteração
//Break -> sai do laço
//Funciona em todos os laços

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* clássico 
for (let i = 0; i < numeros.length; i++) {
        let numero = numero[i]
}
 in
    for (let numero ind numeros){
        let numero = numero[i]
}*/
//of
for (let numero of numeros) {
    //Se for verdadeiro pula direto para a proximção iteração
    //Sem executar o que estiver abaixo do continue
    if (numero === 2) {
        continue;
    }
    
    //Pode poupar recursos do servidor 
    //Dps do break termina o laço
    //Sai do bloco
    if (numero === 7) {
        break;
    }

    console.log(numero);
}

//Em while fazer a incrementação antes do continue
//Para n ficar em um loop infinito