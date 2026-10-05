let lista = [1, 2, 2, 3, 4, 4, 5, 5, 6];

let listaUnica = [];

for (let i = 0; i < lista.length; i++) {
    if (!listaUnica.includes(lista[i])) {
        listaUnica.push(lista[i]);
    }
}

console.log(listaUnica);