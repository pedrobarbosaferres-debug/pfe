class carro{
    //atributos
    modelo='uno';
    marca='fiat';
    ano='2010';
    preco='30000';

    //metodo
    mover(){
        console.log("estou movendo");
    }
    mostrar(){
        console.log('o carro é: '+this.modelo+' '+this.marca+' '+this.ano+' '+this.preco)
    }
    
}

const caminhonete=new carro();
caminhonete.mover();
caminhonete.mostrar();