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
    const valueSplited = value.split(" ")
    console.log(valueSplited);
    
    if (valueSplited[0] === "") {
        console.log('entrei aqui');
        
        switch (valueSplited[3]) {
            case '+':
                const testNaN = parseInt(valueSplited[4]) - parseInt(valueSplited[2])
                console.log(testNaN);
                document.getElementById("display").value = `${parseInt(valueSplited[4]) - parseInt(valueSplited[2])}`
                break;
            case '-':
                document.getElementById("display").value = `${parseInt(valueSplited[2]) - parseInt(valueSplited[4])}`
                break;
            case '/':
                document.getElementById("display").value = `${parseInt(valueSplited[2]) / parseInt(valueSplited[4])}`
                break;
            case '*':
                document.getElementById("display").value = `${parseInt(valueSplited[2]) * parseInt(valueSplited[4])}`
                break;
            default:
                alert("Sem valores a serem calculados")
        }
    }
    switch (valueSplited[1]) {
        case '+':
            document.getElementById("display").value = `${parseInt(valueSplited[0]) + parseInt(valueSplited[2])}`
            break;
        case '-':
            document.getElementById("display").value = `${parseInt(valueSplited[0]) - parseInt(valueSplited[2])}`
            break;
        case '/':
            document.getElementById("display").value = `${parseInt(valueSplited[0]) / parseInt(valueSplited[2])}`
            break;
        case '*':
            document.getElementById("display").value = `${parseInt(valueSplited[0]) * parseInt(valueSplited[2])}`
            break;
        default:
            alert("Sem valores a serem calculados")
    }
}