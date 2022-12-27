Object.prototype.attrib0 = '0'
const avo = {attrib1: 'A'}
const pai = {__proto__: avo, attrib2: 'B'}
const filho = {__proto__: pai,attrib3:'C'}
console.log(filho.attrib0)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing // sombreamento
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status}`

    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
console.log(ferrari.velMax)