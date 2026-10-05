function contarNotas10(notas) {
    let contador = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === 10) {
            contador++;
        }
    }

    return contador;
}

let notas = [10, 8, 10, 7, 9, 10, 6];

console.log(contarNotas10(notas));