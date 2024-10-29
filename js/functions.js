function tabuada(operacao) {
    switch (operacao) {
        case 'soma':
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    document.getElementById("tabuada-soma").innerHTML += `${i} + ${j} = ${i + j} <br>`
                }
            }
            break
        case 'subtracao':            
        case 'multiplicacao':
        case 'divisao':
    }
}