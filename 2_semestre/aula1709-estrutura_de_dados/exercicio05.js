let nomes = ["Pedro", "João", "Maria", "Lucas", "Ana"];


let nome = prompt("Digite um nome:");


let encontrado = false;


for (let i = 0; i < 5; i++) {
    if (nomes[i] === nome) {
        encontrado = true;
    }
}


if (encontrado) {
    console.log("O nome está presente na lista.");
} else {
    console.log("O nome não está presente na lista.");
}
