//Criar um programa que calcula a média
//das notas entre os alunos e envia
// msg do cálculo da média.


//trabalhando com objetos (conjunto de propriedades, podendo receber valores ou funcionalidades, exemplo
//const banda01 = {nome: "megadeth", genero: "Trash Metal"}) Para acessar, utilizar o nome da constante seguido
//de ponto, exemplo: banda01.genero;
const aluno01 = {
    nome: "Patrick",
    nota: 9.8
}

const aluno02 = {
    nome: "Juliana",
    nota: 10
}

const aluno03 = {
    nome: "Joao",
    nota: 2
}

console.log(aluno01)

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
//Se a média for maior que 5 parabenizar a turma

if (media > 5){
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    console.log('A média foi menor que 5')
}




