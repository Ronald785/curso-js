function Calculadora() {
        this.display = document.querySelector('.display');

        this.inicia = () => {
            this.capturaBotoes();
            this.capturaEnter();
        };
 
        this.clearDisplay = () => this.display.value = '';
        
        this.delOne = () => this.display.value = this.display.value.slice(0, -1);
        
        this.addNumDisplay = (el) => this.display.value += el; 

        this.capturaBotoes = () => {
            document.addEventListener('click', event => {
                const el = event.target;
                
                if(el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
                
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                
                if(el.classList.contains('btn-del')) this.delOne();
                
                if(el.classList.contains('btn-eq')) this.realizaConta();
               
                this.display.focus();
            });
        };
        
        this.capturaEnter = () => {
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13) this.realizaConta();
            });
        };
        
        this.realizaConta = () => {
            try {
               const conta = eval(this.display.value);
               if(!conta) {
                   alert("Conta inválida!");
                   return;
               }
               this.display.value = String(conta);
               
           } catch (e) {
               alert("Conta inválida!");
               return;
           }
       };
    }

const calculadora = new Calculadora();
calculadora.inicia();