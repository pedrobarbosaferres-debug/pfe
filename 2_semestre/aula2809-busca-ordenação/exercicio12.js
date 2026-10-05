function selectionSortSalarios(salarios) {
    for (let i = 0; i < salarios.length - 1; i++) {

        let maior = i;

        for (let j = i + 1; j < salarios.length; j++) {
            if (salarios[j] > salarios[maior]) {
                maior = j;
            }
        }

        let temp = salarios[i];
        salarios[i] = salarios[maior];
        salarios[maior] = temp;
    }

    return salarios;
}

let salarios = [10000, 6000, 19000, 4000, 3000];

console.log(selectionSortSalarios(salarios));