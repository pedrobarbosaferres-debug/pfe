let vetor = [5, 2, 7, 5, 9, 1, 5, 3, 8, 5];

let contador = 0;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === 5) {
        contador++;
    }
}

console.log("O número 5 aparece " + contador + " vezes.");