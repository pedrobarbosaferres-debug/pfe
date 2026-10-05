let notas = [7, 8, 6, 9];

let soma = 0;

for (let i = 0; i < 4; i++) {
    soma = soma + notas[i];
}

let media = soma / 4;

console.log("A média final do aluno é: " + media);