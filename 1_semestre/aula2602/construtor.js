class estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome,ra,cpf){
        this.nome=nome;
        this.#ra=ra;
        this.#cpf=cpf;
    }
}
const noemi=new estudante('noemi,333332,345345345');
console.log(noemi)