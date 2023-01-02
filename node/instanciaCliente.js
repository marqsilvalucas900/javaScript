const moduloA = require('./instanciaUnica')
const moduloB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')()

moduloA.inc()
moduloB.inc()
console.log(moduloA)
