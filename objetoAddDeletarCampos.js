const cliente = {
    nome: "Andre",idade: 36,cpf: "1241254151",email: "andre@gmail.com"
};

console.log(cliente);

cliente.fone = "99298421";

console.log(cliente);

cliente.fone = "8822902";

console.log(cliente);

delete cliente.nome;

console.log(cliente);