const pilotos = ['Vetel','Alonso','Raikonnen','Massa']
console.log(pilotos.pop())// retorna o item excluido
console.log(pilotos)
pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift()//retira primeir elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//
pilotos.splice(2,0,"Botas","Massa")
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)