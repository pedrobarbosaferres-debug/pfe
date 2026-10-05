class pessoa{
    nome;
    #cpf='0100200030';//atributo privado
    setcpf(valor){
        this.#cpf=valor;
    }
    getcpf(){
        return this.#cpf;
    }
}

const estudante=new pessoa();
    estudante.nome='livia'
    estudante.setcpf(2222222222220)
    
    console.log(estudante.nome);
    console.log('o cpf é: '+estudante.getcpf());
