const valores = [3,4.5,10.1]
console.log(valores[0],valores[2])
console.log(valores[5])
console.log(valores.length)
valores.push({id:10},false, null)
console.log(valores)

console.log(valores.pop)
delete valores[0]
console.log(valores)

console.log(typeof valores)
