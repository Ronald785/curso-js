//Métodos de instância e estáticos 
//Métodos que posso acessar na classe sem instancia-lá
//Métodos estáticos são referentes apenas a classe
//Além disso, não vão estar disponíveis dentro da instância

//Molde que cria novos objetos
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método de instância, refefente a instância e aos dados dela
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
    //Método estático 
    //Troca de todos os controles
    static trocaPilha() {
        console.log("Ok, vou trocar!");
    }
}

//Objeto criado tem seus próprios dados
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);//ControleRemoto { tv: 'LG', volume: 8 }

//Não tenho acesso aos dados da instância -> O construtor não é chamado
ControleRemoto.trocaPilha();//Ok, vou trocar!

//EXEMPLO
//Math.random()  //chama o mmétodo estático random do objeto Math