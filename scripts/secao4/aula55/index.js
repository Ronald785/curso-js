//Funçoes imediatas (IIFE) ou funções autoinvocadas
// IIFE -> Immediately invoked function expression
/*
function qualquerCoisa() {
    console.log(121541);
}
qualquerCoisa(); //Ainda toca o escopo global, pode ser modificada por outras coisas
*/

//Executada imediatamente  e n toca o escopo global
/*
(function () {
    console.log(121541);
})();
*/
(function (idade, peso, altura) {
    const sobrenome = 'Almeida';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Ronald'));
    }
    falaNome(); //Ronald Almeida
    console.log(idade, peso, altura); //19 68 1.75

})(19, 68, 1.75);

const sobrenome = 'Oliveira';
console.log(sobrenome); //Oliveira