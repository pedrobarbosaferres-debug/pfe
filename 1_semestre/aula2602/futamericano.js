class Jogador_FutebolAmericano {
  #numero;
  #ListaJogadas;
  #JardasConquistadas;
  constructor(numero = 0, ListaJogadas = [], JardasConquistadas = 0) {
    // número do jogador para uso em mensagens
    this.#numero = numero;
    this.#ListaJogadas = ListaJogadas;
    this.#JardasConquistadas = JardasConquistadas;
  }


  fazerTouchDown(){
    return `O jogador número ${this.#numero} fez touchdown`;
  }

  BloquearAdversário(){
    return 'Bloqueia o adversário';
  }

  CorrerJardas(valor){
    if (valor > this.#JardasConquistadas) {
      return 'Quantidade de jardas insuficiente';
    }

    return `Correu ${valor} jardas`;
  }
}

// instanciar passando número também
const jogador1 = new Jogador_FutebolAmericano(12, ['tackle', 'pass'], 100);
console.log(jogador1.fazerTouchDown());
console.log(jogador1.BloquearAdversário());
console.log(jogador1.CorrerJardas(50));