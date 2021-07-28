//IIFE - Immediately invoked function expression
//Função autoinvocada
//Ressaltando sempre que tem = usar ;
function meuEscopo() {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criarObjeto(nome, sobrenome, peso, altura) {
        return {
            nome, 
            sobrenome, 
            peso, 
            altura   
        }
    }
    
                    //função anonima 
    // form.onsubmit = function(evento) {
    //     //previnir atualização padrão
    //     evento.preventDefault();
    //     console.log(evento);
    //     alert(1);
    // };

    // let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const addPessoa = criarObjeto(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(addPessoa);
        /*Versão Luiz
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });
        */
        console.log(pessoas);
        // console.log(`Form não foi enviado ${contador}`);
        // contador++;
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`;
    } 
     
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();