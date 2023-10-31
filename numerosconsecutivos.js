function encontrarTresConsecutivosComSomaZero(arr) {
    const resultado = [];

    for (let i = 0; i < arr.length - 2; i++) {
        const consecutivos = arr.slice(i, i + 3);
        if (consecutivos.reduce((a, b) => a + b, 0) === 0) {
            resultado.push(consecutivos);
        }
    }

    return resultado;
}


const inputArray = [-1, 0, 1, 2, -1, -4];
const resultado = encontrarTresConsecutivosComSomaZero(inputArray);

console.log(resultado);
