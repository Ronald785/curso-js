//Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome  + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome  + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //chama o construtor da superclasse e executa todo o código pedido anteriormente
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S21');
console.log(s1); 
//Smartphone { nome: 'Samsung', ligado: false, cor: 'Preto', modelo: 'Galaxy S21'}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Você alterou o método ligar.');
    }
}

const t1 = new Tablet('Ipad', true);
console.log(t1); //Tablet { nome: 'Ipad', ligado: false, temWifi: true }
console.log(t1.ligado); //false
t1.ligar();//Você alterou o método ligar.
