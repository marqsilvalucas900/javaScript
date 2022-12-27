const ratos = ["Lucas", "Daniel","Radisk"]
//o radisk virou pastor :)
delete ratos[2]
console.log(ratos)//quando o item é deletado ele é apenas esvaziado mas permanece na posição
ratos.push("Carlos")
console.log(ratos)
ratos.splice(2,1)
console.log(ratos)
ratos.splice(2,1,'Nietrabundi','Zenia')
console.log(ratos)