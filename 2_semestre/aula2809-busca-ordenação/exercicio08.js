function ordenarPorTamanho(palavras) {
    for (let i = 0; i < palavras.length; i++) {
        for (let j = 0; j < palavras.length - 1 - i; j++) {

            if (palavras[j].length > palavras[j + 1].length) {
                let temp = palavras[j];
                palavras[j] = palavras[j + 1];
                palavras[j + 1] = temp;
            }

        }
    }

    return palavras;
}

let palavras = ["banana", "maçã", "melão", "melancia", "abacate"];

console.log(ordenarPorTamanho(palavras));