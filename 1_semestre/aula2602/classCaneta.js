class caneta{
    cor='vermelho';
    marca='bic';
    ponta='fina';
    qtdTinta=5;
    tampa=false;

    escrever(){
        return'começou a escrever';
    }
    sublinhar(valor){
        if(valor>this.qtdTinta){return 'insuficiente'}
        else{this.qtdTinta-=valor
        return 'restam '+this.qtdTinta;}
    }
}
const canetafina=new caneta();
console.log(canetafina.escrever())
console.log(canetafina.sublinhar(6));