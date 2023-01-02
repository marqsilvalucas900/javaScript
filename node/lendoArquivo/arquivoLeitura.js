const fs = require('fs')
// se o arquivo for pesado isso vai atrasar o event loop
// caso se opte por um ler de forma sincrona

const caminho = __dirname + '/arquivo.json' //não precisa colocar ponto animal
console.log(__dirname)
//sincrono
//const conteudo = fs.readFileSync(caminho, 'utf-8')
//console.log(conteudo)

//assincrono

fs.readFile(caminho,(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
const config = require('./arquivo.json')
console.log(config.db)

