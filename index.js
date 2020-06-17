//Criar um programa que calcula a média
//das turmas dos alunos e envia
// msg do cálculo da média.


const alunosDaTurmaA = [
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

const alunosDaTurmaB = [
    {
        nome: "Fernando",
        nota: 5
    },
    {
        nome: "Joana",
        nota: 4
    },
    {
        nome: "Joao",
        nota: 2
    }
]

//utilizando funções para o calculo das médias
function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    //Se a média for maior que 5 parabenizar a turma

    if (media > 5){
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")



