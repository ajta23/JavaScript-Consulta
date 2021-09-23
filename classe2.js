class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    
    }
    depositar(valor){
        this.saldo += valor
    }
    exibitSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("Andre","andre@mail","13123", 100,200)

andre.depositarPoupanca(30)
console.log(andre)