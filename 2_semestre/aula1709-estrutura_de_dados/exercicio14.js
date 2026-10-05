let vetor = [10, 20, 30, 40];

let aux = vetor[0];
vetor[0] = vetor[3];
vetor[3] = aux;

console.log(vetor);