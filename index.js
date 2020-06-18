const classA = [
    {
        name: "Patrick",
        grade: 9.8,
    },
    {
        name: "Juliana",
        grade: 7
    },
    {
        name: "Joao",
        grade: 8
    },
    {
        name: "Caetano",
        grade: 0
    }
]

const classB = [
    {
        name: "Fernando",
        grade: 5
    },
    {
        name: "Joana",
        grade: 4
    },
    {
        name: "Joao",
        grade: 2
    },
    {
        name: "alfredo",
        grade: 8
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }

    const average = sum / students.length

    return average


}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats`)
    } else {
        console.log(`${turma} average: ${average}. Is not good`)
    }
}


function markAsFlunked(student) {

    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} is flunked`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "class A")
sendMessage(average2, "class B")

studentsReprovados(classA)
studentsReprovados(classB)

