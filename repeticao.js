function EncontrarNumeroUnico(arr) {
    let numeroUnico = 0;

    for (let i = 0; i < arr.length; i++) {
        numeroUnico ^= arr[i];
    }

    return numeroUnico;
}


const inputArray = [5, 3, 4, 3, 4];
const numeroUnico = EncontrarNumeroUnico(inputArray);

console.log("Array:", inputArray);
console.log("Número Único:", numeroUnico);

//Terminal

//Array: [5, 3, 4, 3, 4]
//Número Único: 5


