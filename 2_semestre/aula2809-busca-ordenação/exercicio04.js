function buscarTelefone(contatos, nome) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
            return contatos[i].telefone;
        }
    }

    return null;
}

let contatos = [
    { nome: "Fulano", telefone: 18982828989 },
    { nome: "Ana", telefone: 18999999999 },
    { nome: "Carlos", telefone: 18988888888 }
];

console.log(buscarTelefone(contatos, "Ana")); 