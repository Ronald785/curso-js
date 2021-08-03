//Escopo Léxico 
const nome = 'Ronald';

//A função pode usar o que está no escopo global, 
//a função conhece o local onde foi declarada
//caso não encronte continuará subindo na bolha até chegar no escopo global
function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Rob';
    falaNome(); //A função continua lembrando onde foi declarada e os vizinhos
}
usaFalaNome(); //Ronald