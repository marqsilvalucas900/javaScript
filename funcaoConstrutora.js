function Carro(velocidadeMaxima=200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro(350,20)
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())