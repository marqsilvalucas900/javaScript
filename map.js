const vet = [1,2,3,4,5,6]

const vetAlterado = vet.map(valor=>valor*2)
console.log(vetAlterado)



const soma10 = e => e + 10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = vet.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
