function criaCalculadora() {
    return { 
        
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        realizaConta() {
            let conta = this.display.value;
                //Função muito perigossa que avalia o que está na string e 
                //tenta executar como código javascript 
                //porém permite escrever qualquer coisa eval('alert("Oi!")');
            try {
                
                if(!conta) {
                    alert("Conta inválida!");
                    return;
                }
                conta = eval(conta);
                this.display.value = String(conta);
                
            } catch (e) {
                alert("Conta inválida!");
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        }, 

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        cliqueBotoes() {
                                    //this em arrow function sempre vou ter ele travado 
                                    //em quem criou o elemento -> n muda o comportamento
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
                
                //usar o this do objeto, ao invés do document
            //}.bind(this));
            });
        }, 

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor; 
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();