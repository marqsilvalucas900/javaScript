const quaseArray = {0:'vava',1:'veve', 2:'vivi'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})
//incrível mesmo é um copo de cana
//Sublime