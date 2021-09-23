const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1241254151",
    email: "andre@gmail.com",
    fones:["99524-4214","894124-414"]
}

cliente.dependetes = {
    nome:"Sarra",
    parentesco:"Filha",
    dataNasc: "2001"
    
}

console.log(cliente);

cliente.dependetes.nome = "Sara Silva";

console.log(cliente);
