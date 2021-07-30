const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];
                        //seleciona apenas um elemento
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let cTag = document.createElement(tag);  
                        //criando um nóde de texto
    let cTexto = document.createTextNode(texto);

    cTag.appendChild(cTexto);
    div.appendChild(cTag);
}
container.appendChild(div);