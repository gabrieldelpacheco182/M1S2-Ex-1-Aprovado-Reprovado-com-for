let students = [
    {
        name: 'Gabriel',
        height: 1.77,
        age: 36,
        sex: 'Masculino',
        room: "Trindade",
        mathematics: 5,
    },
    {
        name: 'Adriana',
        height: 1.657,
        age: 426,
        sex: 'Feminino',
        room: "Coaria",
        mathematics: 7,
    },
    {
        name: 'Paula',
        height: 1.70,
        age: 25,
        sex: 'Feminino',
        room: "Palhoça",
        mathematics: 3,
    },
    {
        name: 'Leonardo',
        height: 1.83,
        age: 21,
        sex: 'Masculino',
        room: "Palhoça", 
        mathematics: 8,
    },
    {
        name: 'Seloé',
        height: 1.63,
        age: 70,
        sex: 'Masculino',
        room: "Laguna",
        mathematics: 4,
    },
];
for (let i = 0; i < students.length; i++) {
    if (students[i].mathematics >= 7){
    alert("O aluno(a), " + students[i].name +" foi aprovado com a media, " + students[i].mathematics + " parabens!")
} else
alert("O aluno(a), " + students[i].name +" foi reprovado com a media, " + students[i].mathematics + " estude mais.")  
};
