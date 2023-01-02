class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade

    }
    printNomeIdade(){
        console.log(`Nome = ${nome}
                    Idade = ${idade}`)
    }
}


module.exports = Pessoa