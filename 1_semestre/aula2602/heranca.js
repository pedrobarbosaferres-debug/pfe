class Jogador {//clas mae  
    #nome;
    #numero;
    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar() {
        return ' 3 vezes na semana';
    }
    getNome(){
        return this.#nome;
    }
    getNumero(){
        return this.#numero;
    }
}

//classe jogador de futebol

class JogadorFutebol extends Jogador { //classe filha
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero){
        super(nome, numero); //chama o construtor da classe mae
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
        
    }
    drible() {
        return 'Tomou uma caneta';
    }
    fazerGol(qtdGols) {
        return this.#totalGols += qtdGols;
  }
  mostrar(){
    return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' têm ' + this.#totalGols + ' gols' ;
  }
}

const jogador1 = new JogadorFutebol('esquerdo', 10, 'Neymar', 10);
jogador1.fazerGol(2);
jogador1.mostrar();
console.log(jogador1.mostrar());
