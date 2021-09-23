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
   
}
};


function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj);
    if (propsCliente.includes("dependentes")) {
console.log(`Oferta de Seguro de vidas para ${obj.nome} está disponivél`);
    }

};

oferecerSeguro(cliente);
console.log(Object.values(cliente));
console.log(Object.entries(cliente));