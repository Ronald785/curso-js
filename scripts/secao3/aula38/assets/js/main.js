const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
//Nodelist é parte do DOOM da API do browser
//Mostra a NodeList q se comporta de maneira parecida com array 

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
// console.log(backgroundColorBody);

for (let p of ps) {
    // console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    // console.log(p.style);
    p.style.color = 'white';
}