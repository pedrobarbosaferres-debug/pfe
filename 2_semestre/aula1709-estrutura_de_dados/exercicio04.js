let numeros = [10, 7, 4, 15, 8, 21, 6, 9];

let pares = 0;

for (let i = 0; i < 8; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    }
}

console.log("Quantidade de números pares: " + pares);