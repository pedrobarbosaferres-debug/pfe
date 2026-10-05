let palavras = [];

function registraPalavra(palavra) {
    palavras.push(palavra);
}

function desfazer() {
    palavras.pop();
}

registraPalavra('eu');
registraPalavra('amo');
registraPalavra('jogar');

console.log(palavras);

desfazer();

console.log(palavras);