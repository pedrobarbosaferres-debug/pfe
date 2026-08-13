class JogadorBasquete {
  #nome;
  #numero;
  #Pontos;

  constructor(nome = '', numero = 0, Pontos = 0) {
    this.#nome = nome;
    this.#numero = numero;
    this.#Pontos = Pontos;
  }

  arremessar() {
    return `O jogador ${this.#nome} e número ${this.#numero} arremessou a bola`;
  }

  marcarPonto() {
    this.#Pontos++;
    return `Marcou um ponto! Total: ${this.#Pontos}`;
  }

  obterPontos() {
    return `${this.#nome} tem ${this.#Pontos} pontos`;
  }
}

// instanciar jogador de basquete
const jogadorBasquete = new JogadorBasquete('Miguel', 23, 15);
console.log(jogadorBasquete.arremessar());
console.log(jogadorBasquete.marcarPonto());
console.log(jogadorBasquete.obterPontos());