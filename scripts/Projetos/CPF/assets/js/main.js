class ValidaFormulario { 
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();//Para q o form n seja enviado
        // console.log('Formulário não enviado');
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.formulario.submit();//envia formulário
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repertir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repertir senha precisam ser iguais.');  
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        //removendo o erro anterior
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            // console.log(errorText); //div
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            // console.log(campo);//todos os input
            const label = campo.previousElementSibling.innerText; //previousElementSibling -> elemento irmão anterior 
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    } 

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 13) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
                        //Expressão refular-> se for diferente de letras ou números
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras ou números.');
            valid = false;
        }

        return valid;
    }
    
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
