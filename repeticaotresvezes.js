function encontrarNumeroUnico(arr) {
    let resultado = 0;
    let bits = 32; 

    for (let i = 0; i < bits; i++) {
        let soma = 0;
        let bit = (1 << i);

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] & bit) {
                soma++;
                soma %= 3; 
            }
        }

        if (soma !== 0) {
            resultado |= bit; 
        }
    }

    return resultado;
}

const inputArray = [5, 3, 4, 3, 5, 5, 3];
const numeroUnico = encontrarNumeroUnico(inputArray);

console.log("Array:", inputArray);
console.log("Número Único:", numeroUnico);

//Terminal

//Array: [5, 3, 4, 3, 5, 5, 3]
//Número Único: 4

