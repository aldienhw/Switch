let students = [
    {name : "Ucok", grade : "A"},
    {name : "Ucup", grade : "B"},
    {name : "Budi", grade : "F"},
    {name : "Carl", grade : "C"}
]

students.forEach(student => {
    let pesan;
    switch (student.grade) {
        case "A":
            pesan = "nilai yang sangat bagus"
            break;
        case "B":
            pesan = "nilai yang bagus"
            break;
        case "C":
            pesan = "nilai yang cukup"
            break;
        case "F":
            pesan = "nilai yang sangat buruk"
            break;
        }
    console.log(`${student.name} mendapat nilai ${student.grade}. ${pesan}.`)
});