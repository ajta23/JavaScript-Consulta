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
    }]
    
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "Filha",
    dataNasc: "2000"

})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="2000" );

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);