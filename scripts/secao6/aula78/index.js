//Polimorfismo 
//Forma de métodos se comportarem de forma diferente no filho e pai -> Polimorfismo
//classe = Função Construtora

//Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) { 
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) { 
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() { 
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)} `);
};

// const conta1 = new Conta(11, 22, 10);
// console.log(conta1);

// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(0.01);
//      ContaCorrente
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) { 
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const cc = new CC(11, 22, 0, 100);
cc.depositar(10);//Ag/c: 11/22 | Saldo: R$10.00 
cc.sacar(110);//Ag/c: 11/22 | Saldo: R$-100.00 
cc.sacar(1);//Saldo Insuficiente: -100

console.log("##################")

const cp = new CP(12, 33, 0);
cp.depositar(10); //Ag/c: 12/33 | Saldo: R$10.00 
cp.sacar(110);//Saldo Insuficiente: 10
cp.sacar(1);//Ag/c: 12/33 | Saldo: R$9.00 