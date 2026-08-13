const prompt = require('prompt-sync')();

let numero=Number(prompt("digite um numero"));
let sinal=prompt("digite um sinal");
let numero1=Number(prompt("digite outro numero"));

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


let nome=carlos
let idade=19
let altura=1
