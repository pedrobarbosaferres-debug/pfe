let numeros = [10, -5, 8, -2, 15, -7, 20, -3, 6, -1];

for (let i = 0; i < 10; i++) {
    if (numeros[i] < 0) {
        numeros[i] = 0;
    }
}

console.log(numeros);