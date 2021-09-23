const clientes = [ 
    {
    nome: "Andre",
    idade: 36,
    cpf: "1241254151",
    email: "andre@gmail.com",
    fones:["99524-4214","894124-414"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "Filha",
        dataNasc: "2001"
    },
    {
    nome:"Samia Maria",
    parentesco: "Filha",
    dataNasc: "2000"
    }
]
},
  
 {
    nome: "Yasmin",
    idade: 20,
    cpf: "1412412512",
    email: "Yasmin@gmail.com",
    fones:["324234234","523423423423"],
    dependentes: [{
        nome: "Enzo",
        parentesco: "Filho",
        dataNasc: "2000"
    }]
    
 }];

 const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

 console.table(listaDependentes);