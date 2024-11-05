function firstNumber(num) {
    document.getElementById("display").value += `${num}`
}

function cleanDisplay() {
    document.getElementById("display").value = ''
}

function operator(op) {
    document.getElementById("display").value += ` ${op} `
}

function operation() {
    const value = document.getElementById("display").value
    if (!value) {
        document.getElementById("display").value = `ERROR`
        return 
    }
    const valueSliced = value.split(" ")
    switch (valueSliced[1]) {
        case '+':
            document.getElementById("display").value = `${parseInt(valueSliced[0]) + parseInt(valueSliced[2])}`
            break;
        case '-':
            document.getElementById("display").value = `${parseInt(valueSliced[0]) - parseInt(valueSliced[2])}`
            break;
        case '/':
            document.getElementById("display").value = `${parseInt(valueSliced[0]) / parseInt(valueSliced[2])}`
            break;
        case '*':
            document.getElementById("display").value = `${parseInt(valueSliced[0]) * parseInt(valueSliced[2])}`
            break;
        default:
            alert("Sem valores para ser calculador")
    }
}