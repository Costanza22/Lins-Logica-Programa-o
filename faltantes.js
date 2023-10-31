function encontrarNumerosFaltantes(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const todososNumeros = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const numerosFaltantes = todososNumeros.filter(numero => !arr.includes(numero));
    
    return numerosFaltantes;
}


const inputArray = [1, 2, 3, 6, 7, 8];
const faltantes = encontrarNumerosFaltantes(inputArray);

console.log(faltantes);


//Terminal
//[ 4, 5 ]