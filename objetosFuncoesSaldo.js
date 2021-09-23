const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1241254151",
    email: "andre@gmail.com",
    fones:["99524-4214","894124-414"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco : "Filha",
        dataNasc: "2001"
    },
    {
         nome:"Samia Maria",
    parentesco: "Filha",
    dataNasc: "2000"
     }
],
saldo:100,

depositar: function(valor){
    this.saldo += valor
    //this - essa instancia do objetos
}
};

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo);