let nota = parseInt(prompt("Digite sau nota"))

console.log(nota);

switch (nota) {
    case 0:
    case 1:            
    case 2:
    case 3:
    case 4:
        alert("Reprovado!")
        break
    case 5:
    case 6:
        alert("Em Recuperação!")
        break
    case 7:
    case 8:
    case 9:
        alert("Aprovado!")
        break
    case 10:
        alert("Aprovado com nota máxima.")
        break
    default:
        break;
}