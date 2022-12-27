const pessoa = {
    nome: 'Carlos',
    idade:2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}, ${e[1]}`)
})
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true, // pode ser listada
    writable: false, // pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2012'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const obj = Object.assign(dest, o1)
console.log(obj)
