function sequenciaFibonacci(n) {
    const sequencia = [1, 1];
    
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}

const numeroElementos = 6;
const resultado = sequenciaFibonacci(numeroElementos);

console.log(resultado);


//Terminal

//[1, 1, 2, 3, 5, 8]
