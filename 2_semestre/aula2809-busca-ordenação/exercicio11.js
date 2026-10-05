function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {

        let menor = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j;
            }
        }

        let temp = array[i];
        array[i] = array[menor];
        array[menor] = temp;
    }

    return array;
}

let temperaturas = [33, 37, 39, 23, 40, 27, 25];

console.log(selectionSort(temperaturas));