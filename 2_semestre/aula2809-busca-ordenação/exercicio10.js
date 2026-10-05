function bubbleSortContador(array) {
    let trocas = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                trocas++;
            }

        }
    }

    console.log("Total de trocas:", trocas);
    return array;
}

let numeros2 = [5, 3, 4, 1, 2];

console.log(bubbleSortContador(numeros2));