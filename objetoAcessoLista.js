const cliente = {
    nome: "Andre",idade: 36,cpf: "1241254151",email: "andre@gmail.com"
}
              // 0      1        2     3
const chaves= ["nome", "idade","cpf", "email"]


chaves.forEach(info => console.log(cliente[info]))