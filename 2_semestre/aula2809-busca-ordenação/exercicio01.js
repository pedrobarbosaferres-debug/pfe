function buscarNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return i;
        }
    }

    return -1;
}

let numeros = [10, 20, 30, 40, 50];

console.log(buscarNumero(numeros, 30)); 
console.log(buscarNumero(numeros, 80)); 