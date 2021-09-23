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

const andre = new Cliente ("Andre","andre@mail","124321",100)
andre.exibitSaldo()
console.log(andre)