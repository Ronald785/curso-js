//AJAX - XMLHttpRequesr (GET) + Promises
//Códigos http

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        //xhr.send(dados) //POST
        xhr.send();
    
        //checar quando a requisição termina
        xhr.addEventListener('load',(e) => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject(xhr.statusText);
            }
        })
    })
};

document.addEventListener('click', (e) => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');
    // console.log(href);
    
    const objConfig = {
        method: 'GET',
        url: href
    };
    /*
    request(objConfig)
        .then(response => carreResultado(response))
        .catch(error   => console.log(error));
    */
   try {
       const response = await request(objConfig);
       carreResultado(response);
   } catch (error) {
       console.log(error);
   }
}

function carreResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
