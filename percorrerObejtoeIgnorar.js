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

let relatorio =" ";

for( let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
         ${info} ==> ${cliente[info]}
        `;
    }
    
}
console.log(relatorio)