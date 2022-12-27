
/*
const nome = ["Lucas","Latanas"]  

console.log(nome[0][nome[0].length-1] == nome[1][nome[1].length-1])
*/


function comparaPrimUlt(s1,s2){
    if(s1[s1.length-1] == s2[s2.length-1] && s1[0] == s2[0] && s1!=s2)
        return true
    else
        return false


}


function ultimoIgual(vet){
    let vetPalavras = []
    for (let i = 0; i < vet.length;) {
        let aux = []
        aux.push(vet[i])
        for (let j = 0; j < vet.length;) {
            if(comparaPrimUlt(vet[i],vet[j]))
                aux.push(vet[j])
        }
        vet.splice(0,1)
        if(aux.length>1)
            vetPalavras.push(aux)
    }
    return vetPalavras
}




vet = ["Lucas","Farpas", "Latas","Facas","Tapas","Farmas"] 

console.log(ultimoIgual(vet))

