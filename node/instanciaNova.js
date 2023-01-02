module.exports = () => {
    return{
        valor: 1,
        inc(){
            this.valor++
        }
    }
}
//Aqui se usou um factory, dessa forma
//ela sempre retornará uma nova instância
