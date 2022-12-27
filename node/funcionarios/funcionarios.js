const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
/*
axios.get(url).then(response =>{
    const funcionarios = response.data
    const mulherChinesaMenorSalario = funcionarios.filter(pessoa => pessoa.genero == 'F' && pessoa.pais == 'China').map(pessoa => pessoa.salario)
    mulherChinesaMenorSalario.sort((a,b) => a-b)
    console.log(mulherChinesaMenorSalario[0])   
})
*/

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(func)
})
