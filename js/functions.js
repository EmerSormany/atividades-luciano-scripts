function tabuada(operacao) {
    switch (operacao) {
        case 'soma':
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    document.getElementById("soma").innerHTML += `${i} + ${j} = ${(i + j).toFixed(4)} <br>`
                }
                document.getElementById("soma").innerHTML += `<br>`
            }
            break
        case 'subtracao': 
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    document.getElementById("subtracao").innerHTML += `${i} - ${j} = ${(i - j).toFixed(4)} <br>`
                }
                document.getElementById("subtracao").innerHTML += `<br>`
            }  
            break         
        case 'multiplicacao':
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    document.getElementById("multiplicacao").innerHTML += `${i} x ${j} = ${(i * j).toFixed(4)} <br>`
                }
                document.getElementById("multiplicacao").innerHTML += `<br>`
            } 
            break
        case 'divisao':
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    document.getElementById("divisao").innerHTML += `${i} ÷ ${j} = ${(i / j).toFixed(4)} <br>`
                }
                document.getElementById("divisao").innerHTML += `<br>`
            } 
            break
    }
}