const prompt = require('prompt-sync')();

let numero=Number(prompt("digite um numero"));
let sinal=prompt("digite um sinal");
let numero1=Number(prompt("digite outro numero"));

const resultado=function(numero,sinal,numero1){

}

switch(sinal){
    case"+":console.log(numero+numero1);
    break
    case"-":console.log(numero-numero1);
    break
    case"*":console.log(numero*numero1);
    break
    case"/":console.log(numero/numero1);
    break
    default:console.log("erro")
}
resultado(numero,sinal,numero1)