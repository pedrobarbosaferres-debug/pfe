let vetor = [];
let crescente = true;

for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));
}

for (let i = 0; i < 4; i++) {
    if (vetor[i] >= vetor[i + 1]) {
        crescente = false;
    }
}

if (crescente) {
    console.log("O vetor está em ordem crescente.");
} else {
    console.log("O vetor não está em ordem crescente.");
}