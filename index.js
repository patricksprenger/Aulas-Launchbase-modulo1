//Criar um programa que calcula a média
//das turmas dos alunos e envia
// msg do cálculo da média.


const alunosDaTurmaA = [
    {
        nome: "Patrick",
        nota: 9.8,
    },
    {
        nome: "Juliana",
        nota: 7
    },
    {
        nome: "Joao",
        nota: 2
    },
    {
        nome: "Caetano",
        nota: 0
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
    },
    {
        nome: "alfredo",
        nota: 8
    }
]


function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
       soma += alunos[i].nota
    }

    const media = soma / alunos.length
    return media
    

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


//Marcar aluino como reprovado se a nota for <5, enviar msg

function marcarComoReprovado(aluno){
    
        aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
        }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)

