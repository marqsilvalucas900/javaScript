//Eis aqui a implementação de árvore em java script cuja utilidade é absolutamente nenhuma
//sitema de de homogeneização e contante evolução da inteligência

// Este sistema se baseará na ideia de que a inteligência dos alunos pode ser melhorada
// a medida que os indivíduos compartilham seus conhecimentos e apredizados uns com os outros.
// A árvore irá distribuir os alunos numa hierarquia em que os indivíduos com maiores desempenhos
// acadêmicos serão progressivamente ancorados para ao topo, de modo que dependendo do nível(altura da árvore)
// estes assumirão funções pedagógicas diferentes dentro do sistema. 

// E o narga?

// Este sistema também pode ser aplicado a ambientes empresariais que estão passando por uma
// reetruturação e readequação a novos parâmetros de qualidade. Promover a competividade para
// se alcançar  postos cada vez mais elevados pode estimular os membros a se autoaperfeiçoarem num nível individual.
// Já em um nível coletivo da empresa, blablabla não sei o q


// As relações de graus de superioridade pode ser estabelecida através de relações matemáticas
// blabla

// um conjunt de livros precisa ser distribuidos em uma árvore binária em que as folhas são os livros
// e nós pai são categorias

// Não confie nessas bancas de apostas online cujos os resultados são determinados por algoritmos.
// Com certeza os algoritmos são feitos para que as bancas sempre saiam ganhando dependendo da situação. 
// Prefira bancas que mostram ao vivo o lançamento dos dados sendo realizados por uma pessoa real.
// Não sexitem estratégias para ganhar. A ecolha mais segura é não jogar. HAHAHAHAHAHAHAH
// Se você não jogar tem 100% de chance de continuar com o seu dinheiro. Se existisse uma estratégia, todos usariam ela e a banca quebraria.
// O filme quebrando a banca é uma farsa total. Se fosse assim o curso de matemática pura seria repleto de milionários, porém
// o que há na realidade são pessoas mentalmente intáveis, com vidas sociais e financeiras precarizadas que se limitam a uma carreira acadêmica cheia de 
// estresses e frustrações. 

// A chance de vc perder seu tempo construindo um algoritmo que encontra a melhor escolha em uma aposta qualquer e ser gratificado por isso
// é menor do que vc construir um algoritmo que faça qualquer outra coisa e consiga algum dinheiro com ele.

//Estrutura Baseada em encaixes
//Qual o melhor 

//Estrutura baseada em níveis => listas que se interligam em uma hierarquia dada
//parece uma matriz 

/*
    class Nivel{
        constructor(){
            this.elements = elements[]
            this.menorValor = menorValor
            this.maiorValor = maiorValor
            this.nextList = null
        }
    }
Os elementos que ficam em um nível possuem os valores dentro de um determinado escopo
e assim por diante nos demais níveis.
=============c======================== nivel 1 
|ligação    /   
===========8======0=================== nivel 2 
|           \
=============b===o===9================ nivel 3
|             \ / \ / \
===============o===I===0============== nivel 4

Uma busca aqui seria bem rápida, mas aqui vai uma ideia interessante.
Os níveis podem incluir um atributo que armazene a quantidade de vezes que eles estão sendo acessados.
A estrutura criará uma fila(ou uma outra lista mesmo) em que os níveis mais acessados serão postos em 
ordem crescente de acesso, gerando assim uma ponte de busca. 
Foda-se, fiquei doido.


Estruturas em teias. Uma estrutura em teia seria grafos com configurações singulares, ou seja,
uma teia seria um grafo cujo design propicia algum tipo de vantagem seja na maximização de busca,
encapsulamento de informações, nível de organização etc.

*/ 


class Node{
    constructor(value){  
        this.value = value
        this.right = null
        this.left = null
    }
}
class Tree{
    constructor(impr, comp){
        this.first = null
        this.n = 0
        this.impr = impr
        this.comp = comp

    }
    insertNode(value){
        let node = new Node(value)
        let aux = null, ant=null;

        if(this.n == 0 ){
            this.first = node 
            this.n++
        }
        else{
            aux = this.first
            ant = null
            while(true){
                if(this.comp(aux.value,node.value) == 1){
                    if(aux.right != null)
                        aux = aux.right
                    else{
                        aux.left = node
                        break
                    }
                }
                else if(this.comp(aux.value,node.value) == -1){
                    if(aux.left != null)
                        aux = aux.left
                    else{
                        aux.left = node
                        break
                    }
                }
            }
            this.n++
        }
    }
    printTree(a=this.first){
        if(a){
            this.impr(a.value)
            this.printTree(a.right)
            this.printTree(a.left)
        }
        else
            console.log(null)
    }
}



class Aluno{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

function printa(a){
    console.log("aa")
    console.log(a.nome,"\n")
    console.log(a.idade,"\n")

}

function comp(v1,v2){
        
    if(v1.idade > v2.idade)
        return 1
    else
        return -1
}


const a1 = new Aluno("Zubu",10)
const a2 = new Aluno("camundonji",600)
const t = new Tree(printa,comp)

t.insertNode(a1)
t.insertNode(a2)
t.printTree()

