function encontrarTresConsecutivosComSomaDada(arr, somaDesejada) {
    const resultado = [];

    for (let i = 0; i < arr.length - 2; i++) {
        const numerosomado = arr.slice(i, i + 3);
        if (numerosomado.reduce((a, b) => a + b, 0) === somaDesejada) {
            resultado.push(numerosomado);
        }
    }

    return resultado;
}


const inputArray = [2, 7, 7, 1, 8, 2, 7, 8, 7];
const somaDesejada = 16;
const resultado = encontrarTresConsecutivosComSomaDada(inputArray, somaDesejada);

console.log(resultado);


//O que se espera do terminal//
//[ [ 2, 7, 7 ], [ 7, 1, 8 ] ]//