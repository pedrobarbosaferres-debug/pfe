function buscarProduto(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco < 20) {
            return produtos[i].nomeProduto;
        }
    }

    return null;
}

let produtos = [
    { nomeProduto: "Arroz", preco: 25 },
    { nomeProduto: "Feijão", preco: 15 },
    { nomeProduto: "Macarrão", preco: 8 },
    { nomeProduto: "Café", preco: 30 }
];

console.log(buscarProduto(produtos)); 