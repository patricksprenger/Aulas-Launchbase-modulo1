//Criar um programa que calcula a média
//das notas entre os alunos e envia
// msg do cálculo da média.

//Trabalhando com ARRAYS (vetores (coleção de objetos)), para acesso utilizar nome da array[posição(lembrando que inicia em 0)]
//para exemplo, verificar const media abaixo: alunos[0].nota, o programa vai dentro da array alunos, procura pela posição 0,
//que é o primeiro objeto, e procura o atributo nota nesse objeto, assim fazendo o return do valor.
const alunos = [
    {
        nome: "Patrick",
        nota: 9.8
    },
    {
        nome: "Juliana",
        nota: 10
    },
    {
        nome: "Joao",
        nota: 2
    }
]


console.log(alunos)
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3


//Se a média for maior que 5 parabenizar a turma

if (media > 5){
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    console.log('A média foi menor que 5')
}




