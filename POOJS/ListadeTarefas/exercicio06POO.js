//Classe ContaBancaria
//Atributos: titular, saldo
//Métodos: depositar(valor), sacar(valor), consultarSaldo()
//Validar saque apenas com saldo suficiente


class ContaBancaria{
    #titular
    #saldo
    constructor(titular, saldo){
        this.#saldo = 0;
        this.#titular = titular;
    }
    depositar(valor){
        if(valor>0){
            this.#saldo += valor; 
            console.log(`Deposito realizado! Saldo atual: ${this.#saldo}`)
        }else{
            console.log(`Valor inválido!`)
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque realizado! Saldo atual: ${this.#saldo}`)
        }else if (valor > this.#saldo){
            console.log(`Saque não realizado! Saldo insuficiente ${this.#saldo}`)
        } else{
            console.log(`Valor inválido!`)
        }
    }
    consultarSaldo(){
        console.log(`titular: ${this.#titular}, Saldo: ${this.#saldo}`)
    }
}

let conta1 = new ContaBancaria("Maria")
conta1.depositar(10);
conta1.consultarSaldo();
conta1.sacar(5);
conta1.consultarSaldo();
conta1.sacar(6); //erro
conta1.consultarSaldo();