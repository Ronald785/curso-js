//AJAX - XMLHttpRequesr (GET) + Promises
//Códigos http

document.addEventListener('click', (e) => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    try {
        const href = element.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!');
    
        const html = await response.text();
        carreResultado(html);
    } catch (e) {
        console.log(e);
    }

    // fetch(href)
    // .then(response => {
    //     if(response.status !== 200) throw new Error('ERRO 404'); 
    //         return response.text();
    // })
    // .then(html => carreResultado(html))
    // .catch(e => console.log(e));
}

function carreResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// //Retorna por padrão uma promise
// fetch('pagina1.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('ERRO 404 MEU');
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//                 //console.warn()//amarelo .error() vermelho
//     .catch(e => console.error(e)); 